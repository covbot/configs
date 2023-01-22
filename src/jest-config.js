import { mergeConfigs } from './utils';

/**
 * Function which generates configuration for Jest, using organization defaults.
 * @param {boolean} [esm] - enable experimental ESM support for Jest. Useful, when using bleeding-edge NodeJS features
 * @param {import('ts-jest').JestConfigWithTsJest} [overrides] - override default values. Use carefully: if you need to override
 *   configuration, consider changing default configuration across all repositories
 * @returns {import('ts-jest').JestConfigWithTsJest}
 */
export const defineConfig = (esm, overrides) => {
	return mergeConfigs(
		false,
		{
			transform: {
				'\\.[t]sx?$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
			},
			moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'cjs', 'mjs', 'json', 'node'],
			collectCoverageFrom: ['<rootDir>/src/**/!(index).{ts,tsx,js,jsx,cjs,mjs}'],
			testMatch: ['<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx,cjs,mjs}'],
			watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
		},
		esm && {
			extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
			transform: {
				'\\.[t]sx?$': ['ts-jest', { useESM: true, tsconfig: './tsconfig.test.json' }],
			},
		},
		overrides,
	);
};

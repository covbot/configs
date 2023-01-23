const { mergeConfigs } = require('./utils');

/**
 * Function which generates configuration for "clean-publish", using organization defaults.
 * @param {import('clean-publish').Config} [overrides] - override default values. Use carefully: if you need to override
 *   configuration, consider changing default configuration across all repositories
 * @returns {import('clean-publish').Config}
 */
const defineConfig = (overrides) => {
	return mergeConfigs(
		true,
		{
			withoutPublish: true,
			tempDir: 'prepared-package',
			files: [
				'docs',
				'src',
				'aqu.config.json',
				'.prettierignore',
				'.gitignore',
				'jest.config.ts',
				'tsconfig.json',
				'.stackblitzrc',
				'coverage',
			],
		},
		overrides,
	);
};

module.exports = { defineConfig };

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
				'.prettierignore',
				'.gitignore',
				'.stackblitzrc',
				'coverage',
                /^prettier\.config\.(js|cjs)$/,
                /^tsconfig\.(\w+\.)?json$/,
                /^jest\.config\.(js|ts|mjs|cjs|json)$/,
                /^aqu\.config\.(js|cjs|mjs|ts|json)$/,
                '.aqurc'
			],
		},
		overrides,
	);
};

module.exports = { defineConfig };

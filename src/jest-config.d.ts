/**
 * Function which generates configuration for Jest, using organization defaults.
 * @param {boolean} [esm] - enable experimental ESM support for Jest. Useful, when using bleeding-edge NodeJS features
 * @param {import('ts-jest').JestConfigWithTsJest} [overrides] - override default values. Use carefully: if you need to override
 *   configuration, consider changing default configuration across all repositories
 */
export declare const defineConfig: (esm?: boolean, overrides?: import('ts-jest').JestConfigWithTsJest) => import('ts-jest').JestConfigWithTsJest;

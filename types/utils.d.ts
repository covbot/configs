/**
 * @template T
 * @param {boolean} concatArrays
 * @param {T} object
 * @param {(T | false | undefined | null)[]} sources
 * @returns {T}
 */
export function mergeConfigs<T>(concatArrays: boolean, object: T, ...sources: (false | T)[]): T;
//# sourceMappingURL=utils.d.ts.map
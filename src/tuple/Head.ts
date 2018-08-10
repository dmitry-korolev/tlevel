/**
 * https://github.com/Microsoft/TypeScript/issues/14833#issuecomment-401429472
 */

export type Head<Tuple extends any[]> = Tuple extends [infer H, ...any[]] ? H : never

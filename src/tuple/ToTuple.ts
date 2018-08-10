/**
 * https://github.com/Microsoft/TypeScript/issues/14833#issuecomment-401429472
 */
export type ToTuple<T> = T extends any[] ? T : any[]

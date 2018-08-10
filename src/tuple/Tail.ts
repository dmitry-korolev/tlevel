/**
 * https://github.com/Microsoft/TypeScript/issues/14833#issuecomment-401429472
 */
export type Tail<Tuple extends any[]> = ((...t: Tuple) => void) extends ((
  h: any,
  ...rest: infer R
) => void)
  ? R
  : never

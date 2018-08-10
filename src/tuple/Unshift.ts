/**
 * https://github.com/Microsoft/TypeScript/issues/14833#issuecomment-401429472
 */
export type Unshift<Tuple extends any[], Element> = ((h: Element, ...t: Tuple) => void) extends (
  ...t: infer R
) => void
  ? R
  : never

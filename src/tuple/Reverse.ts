import { Tail } from './Tail'
import { Head } from './Head'
import { Unshift } from './Unshift'

/**
 * https://github.com/Microsoft/TypeScript/issues/14833#issuecomment-401429472
 */
export type Reverse<Tuple extends any[]> = Reverse_<Tuple, []>
type Reverse_<Tuple extends any[], Result extends any[]> = {
  1: Result
  0: Reverse_<Tail<Tuple>, Unshift<Result, Head<Tuple>>>
}[Tuple extends [] ? 1 : 0]

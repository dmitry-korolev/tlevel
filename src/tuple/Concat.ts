import { Tail } from './Tail'
import { Head } from './Head'
import { Unshift } from './Unshift'
import { Reverse } from './Reverse'
import { ToTuple } from './ToTuple'

/**
 * https://github.com/Microsoft/TypeScript/issues/14833#issuecomment-401429472
 */
export type Concat<
  Tuple1 extends any[],
  Tuple2 extends any[],
  R = Reverse<Tuple1>,
  T extends any[] = ToTuple<R>
> = Concat_<T, Tuple2>

type Concat_<Tuple1 extends any[], Tuple2 extends any[]> = {
  1: Reverse<Tuple1>
  0: Concat_<Unshift<Tuple1, Head<Tuple2>>, Tail<Tuple2>>
}[Tuple2 extends [] ? 1 : 0]

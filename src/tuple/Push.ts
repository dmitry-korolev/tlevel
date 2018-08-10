import { ToTuple } from './ToTuple'
import { Reverse } from './Reverse'
import { Unshift } from './Unshift'

/**
 * https://github.com/Microsoft/TypeScript/issues/14833#issuecomment-401429472
 */
export type Push<
  Tuple extends any[],
  Element,
  R = Reverse<Tuple>,
  T extends any[] = ToTuple<R>
> = Reverse<Unshift<T, Element>>

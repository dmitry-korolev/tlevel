import { Tail } from './Tail'
import { Head } from './Head'

export type MergeValues<Tuple extends object[]> = MergeValues_<Tail<Tuple>, Head<Tuple>>

type MergeValues_<Tuple extends any[], Result extends object> = {
  1: Result
  0: MergeValues_<Tail<Tuple>, Head<Tuple> & Result>
}[Tuple extends [] ? 1 : 0]

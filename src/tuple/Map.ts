// import { Tail } from './Tail'
// import { Head } from './Head'
// import { Reverse } from './Reverse'
// import { Unshift } from './Unshift'
//
// export type MapTuple<Tuple extends any[], fn extends (arg: any) => any> = MapTuple_<Tuple, fn, []>
//
// type MapTuple_<Tuple extends any[], fn extends (arg: any) => any, Result extends any[]> = {
//   1: Reverse<Result>
//   0: MapTuple_<Tail<Tuple>, fn, Unshift<Result, fn extends (arg: Head<Tuple>) => infer R ? R : null>>
// }[Tuple extends [] ? 1 : 0]
//
//
// declare const a: MapTuple<[1, 2, 3], (arg: number) => string>
// declare const b: MapTuple<[Promise<number>], <T>(arg: T) => T extends Promise<infer R> ? R : null>

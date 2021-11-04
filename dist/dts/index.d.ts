declare type Nullable = null | undefined;
declare type MatchResult<R> = R | Nullable;
export default function match<T, R>(cases: [(data: T) => boolean, (data: T) => R][], defaultValue: R | Nullable, data: T): MatchResult<R>;
export {};

type Nullable = null | undefined;
type MatchResult<R> = R | Nullable;

export default function match<T, R> (cases: [(data: T) => boolean, (data: T) => R][], defaultValue: R | Nullable, data: T): MatchResult<R> {
    const matchCase = cases.find(([predicate, _]) => predicate(data));

    if (matchCase) {
        const [_, processor] = matchCase;

        return processor(data);
    } else {
        return defaultValue;
    }
}

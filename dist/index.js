export default function match(cases, defaultValue, data) {
    const matchCase = cases.find(([predicate, _]) => predicate(data));
    if (matchCase) {
        const [_, processor] = matchCase;
        return processor(data);
    }
    else {
        return defaultValue;
    }
}
//# sourceMappingURL=index.js.map
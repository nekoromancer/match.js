# match.js  
Match.js is a Javascript library like the 'switch' statement but it works as expression  
  
## Usage  
```typescript
type Nullable = null | undefined;  
type MatchResult<R> = R | Nullable;

match<T, R> (
	cases: [(data: T) => boolean, (data: T) => R][], 
	defaultValue: R | Nullable, 
	data: T): MatchResult<R>,
)
```
## Example
```javascript
const defaultValue = 0;
const evenSquare = x => match([
    // if number x is even and is not zero, function should return square value of x
	[x => x !== 0 && x % 2 === 0, x => Math.pow(x, 2)],
	// if number x is odd, function should return just x
	[x => x % 2 !== 0, x => x],
	// if there is no matched case, function should return default value 0
], defaultValue, x);
```
```javascript
evenSquare(2)
// => 4

evenSquare(3)
// => 3

evenSquare(0)
// => 0
```

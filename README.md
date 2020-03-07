# use-multi-possibility

[![Codecov Coverage](https://img.shields.io/codecov/c/github/nickheal/use-multi-possibility/master.svg?style=flat)](https://codecov.io/gh/nickheal/use-multi-possibility/)
![GitHub](https://img.shields.io/github/license/nickheal/use-multi-possibility)

## Purpose

use-multi-possibility is a package designed to simplify testing with a large set of possible values.

It will test every combination of the groups provided.

It also includes sets of grouped data to test with.

## Installation

Add to your project using `npm i -D use-multi-possibility`

## Usage

```javascript
import useMultiPossibility from 'use-multi-possibility';

useMultiPossibility(([value]) => {
  console.log(value);
}, [[1, 2, 3]]);

// 1
// 2
// 3
```

```javascript
import useMultiPossibility from 'use-multi-possibility';

useMultiPossibility(([num, char]) => {
  console.log(num, char);
}, [[1, 2], ['a', 'b']]);

// 1 'a'
// 1 'b'
// 2 'a'
// 2 'b'
```

It comes with sets of predefined grouped data that you can use.

### TRUTHY

```javascript
import useMultiPossibility, { TRUTHY } from 'use-multi-possibility';

useMultiPossibility(([t]) => {
  console.log(t);
}, [TRUTHY]);

// true
// 2
// {}
```

### FALSY

```javascript
import useMultiPossibility, { FALSY } from 'use-multi-possibility';

useMultiPossibility(([f]) => {
  console.log(f);
}, [FALSY]);

// false
// 0
// undefined
// null
```

### NUMERIC

```javascript
import useMultiPossibility, { NUMERIC } from 'use-multi-possibility';

useMultiPossibility(([n]) => {
  console.log(n);
}, [NUMERIC]);

// -1
// 0
// 0.5
// 1
// 1000000
// 1000000000
```
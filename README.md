# use-multi-possibility

[![Codecov Coverage](https://img.shields.io/codecov/c/github/nickheal/use-multi-possibility/master.svg?style=flat)](https://codecov.io/gh/nickheal/use-multi-possibility/)
![GitHub](https://img.shields.io/github/license/nickheal/use-multi-possibility)

## Purpose

use-multi-possibility is a package designed to simplify testing with a large set of possible values.

It will test every combination of the groups provided.

It also includes sets of grouped data to test with.

## Table of Contents
1. [Installation](#installation)
2. [How to use](#how-to-use)
3. [Issues](#issues)
4. [Contributions 😁](#contributions-😁)

## Installation

Add to your project using `npm i -D use-multi-possibility`

## How to use

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

## Issues

Please raise any issues on the [GitHub repo](https://github.com/nickheal/react-journey/issues).

## Contributions 😁

All contributions are welcome, and actively encouraged! Have a look at the steps below, but also please don't hesitate to get in contact if you are unsure what to do.

### Steps
1. Fork the repository.
3. Make your change—including tests—on the `develop` branch.
4. Commit your work. Commit messages follow [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) syntax (there is a pre-commit hook to help with this).
5. Push your branch to origin.
6. Submit a pull request to the `develop` branch.
7. Once merged in to master the new version will be automatically built, and pushed to npm.

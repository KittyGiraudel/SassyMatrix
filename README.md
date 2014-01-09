# SassyMatrix

All you ever wanted to deal with matrices in Sass.

## What's in there?

* `matrix($x, $y)`: create a matrix of `$x` rows by `$y` columns
* `set-value($matrix, $x, $y, $value)`: set `$value` at `$matrix[$x, $y]`
* `get-value($matrix, $x, $y)`: get value at `$matrix[$x, $y]`
* `display($matrix)`: display matrix
* `swap-values($matrix, $a, $b)`: swaps values `$a` and `$b` from `$matrix`
* `columns($matrix)`: return number of columns in `$matrix`
* `rows($matrix)`: return number of rows in `$matrix`
* `is-square($matrix)`: return wether `$matrix` has as many rows as columns
* `is-diagonal($matrix)`: checks wether all values from the main diagonal of `$matrix` are set while all other values are equal to the dummy one (0)

## Requirements

All you need is a clean version of Sass 3.3. Otherwise it's just pure Sass madness.

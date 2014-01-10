# SassyMatrix

All you ever wanted to deal with matrices in Sass.

## What's in there?

### Instanciating matrix
* `matrix($x, $y: $x)`: create a matrix of `$x` rows by `$y` columns filled with 0s
* `unit-matrix($x, $y)`: create a matrix of `$x` rows by `$y` columns filled with 0s except the diagonal which is filled with 1s

### Writing in matrix
* `set-entry($matrix, $coords, $value)`: set `$value` at `$matrix[$coords[1], $coords[2]]`

### Reading matrix
* `get-entry($matrix, $coords)`: get entry at `$matrix[$coords[1], $coords[2]]`

### Displaying matrix
* `display($matrix)`: display matrix

### Altering matrix
* `swap-entries($matrix, $e1, $e2)`: swaps values `$a` and `$b` from `$matrix`
* `swap-rows($matrix, $r1, $r2)`: swaps rows `$r1` and `$r2` from `$matrix`
* `swap-columns($matrix, $c1, $c2)`: swaps columns `$c1` and `$c2` from `$matrix`

### Checking for matrix properties
* `columns($matrix)`: return number of columns in `$matrix`
* `rows($matrix)`: return number of rows in `$matrix`
* `is-square($matrix)`: check wether `$matrix` has as many rows as columns
* `is-diagonal($matrix)`: check wether all values from the main diagonal of `$matrix` are set while all other values are equal to 0
* `is-lower-triangular($matrix, $flag: null)`: check wether all value below `$matrix` diagonal are equal to 0
* `is-upper-triangular($matrix, $flag: null)`: check wether all value above `$matrix` diagonal are equal to 0

## Requirements

All you need is a clean version of Sass 3.3. Otherwise it's just pure Sass madness.

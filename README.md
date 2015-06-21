[![npm](https://nodei.co/npm/logrange.png)](https://nodei.co/npm/logrange/)

# logrange

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Logarithmic range between two numbers.

[travis]: https://travis-ci.org/eush77/logrange
[travis-badge]: https://travis-ci.org/eush77/logrange.svg
[david]: https://david-dm.org/eush77/logrange
[david-badge]: https://david-dm.org/eush77/logrange.png

## Example

Ascending logarithmic range:

```js
logrange(4, 1000, 2)
//=> [4, 8, 16, 32, 64, 128, 256, 512]
```

Descending logarithmic range:

```js
logrange(4, 0.1, 0.5)
//=> [4, 2, 1, 0.5, 0.25, 0.125]
```

## API

#### logrange([opts], first, last, ratio)

Returns array of multiples of `first` up to `last`:

```js
[first, first*ratio, first*ratio*ratio, ...]
```

##### opts.inclusive

Type: `Boolean`<br>
Default: `false`

If set, `last` is included if it is a part of the sequence.

## Install

```
npm install logrange
```

## License

MIT

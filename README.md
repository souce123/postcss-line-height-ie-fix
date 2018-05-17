# PostCSS Line Height Ie Fix [![Build Status][ci-img]][ci]

[PostCSS] plugin to fix the line-height ie bug.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/souce123/postcss-line-height-ie-fix.svg
[ci]:      https://travis-ci.org/souce123/postcss-line-height-ie-fix

```css
.foo {
    /* Input example */
    line-height: 34px;
}
```

```css
.foo {
  /* Output example */
  line-height: 34px;
  height: 34px;
}
```

## Usage

```js
postcss([ require('postcss-line-height-ie-fix') ])
```

See [PostCSS] docs for examples for your environment.

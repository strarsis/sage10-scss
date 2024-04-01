## Sage 10, adjusted for SCSS (SASS)
See the [commits](https://github.com/strarsis/sage10-scss/commits/master) for the required steps.

## Reference assets
When using [`bud.alias`](https://bud.js.org/docs/bud.alias/) with SCSS (SASS) ([`bud-sass`](https://bud.js.org/extensions/bud-sass/)), 
you can use the `bud` (`webpack`) aliases by prefixing them with a tilde sign (`~`), 
like so
(note: `~@images` used in the example is a predefined alias added by [`@roots/sage`](https://bud.js.org/docs/bud.alias/#rootssage)):
```scss
.test {
  background: url("~@images/background/test.jpg");
}
````
Without that tilde sign (`~`) the path is not correctly interpolated when compiling the SCSS.

## Common issues

### `Module not found: Error: Can't resolve '@styles/[...]'`
`npm` `dev` dependencies `@roots/bud-sass` and `@roots/bud-postcss` have to be installed.

### Some JavaScript error occurs when `bud` is used
Ensure that all `bud`-specific dependencies have the same version (or at least close).

## Sage 10, adjusted for SCSS (SASS)
See the [commits](https://github.com/strarsis/sage10-scss/commits/master) for the required steps.

## Common issues

### `Module not found: Error: Can't resolve '@styles/[...]'`
`npm` `dev` dependencies `@roots/bud-sass` and `@roots/bud-postcss` have to be installed.

### Some JavaScript error occurs when `bud` is used
Ensure that all `bud`-specific dependencies have the same version (or at least close).

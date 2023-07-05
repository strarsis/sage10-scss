import WpEditorQueryPlugin from 'wp-editor-query-plugin';

/**
 * Compiler configuration
 *
 * @see {@link https://roots.io/docs/sage sage documentation}
 * @see {@link https://bud.js.org/guides/configure bud.js configuration guide}
 *
 * @param {import('@roots/bud').Bud} app
 */
export default async (app) => {

  await app.extensions.add(new WpEditorQueryPlugin())

  app.build.setLoader(
    `editor-extract-loader`,
    WpEditorQueryPlugin.loader
  )

  app.build.setItem(`wp-editor`, {
    loader: `editor-extract-loader`,
    options: {
      include: ['app'],
      adopt: ['editor'],
    },
  })

  app.build.rules.sass.setUse(items => ['minicss', 'css', 'wp-editor', 'postcss', 'resolveUrl', 'sass'])


  /**
   * Application assets & entrypoints
   *
   * @see {@link https://bud.js.org/docs/bud.entry}
   * @see {@link https://bud.js.org/docs/bud.assets}
   */
  app
    .entry('app', ['@scripts/app', '@styles/app'])
    .entry('editor', ['@scripts/editor', '@styles/editor'])
    .assets(['images']);

  /**
   * Set public path
   *
   * @see {@link https://bud.js.org/docs/bud.setPublicPath}
   */
  app.setPublicPath('/app/themes/sage/public/');

  /**
   * Development server settings
   *
   * @see {@link https://bud.js.org/docs/bud.setUrl}
   * @see {@link https://bud.js.org/docs/bud.setProxyUrl}
   * @see {@link https://bud.js.org/docs/bud.watch}
   */
  app
    .setUrl('http://localhost:3000')
    .setProxyUrl('http://example.test')
    .watch(['resources/views', 'app']);

  /**
   * Generate WordPress `theme.json`
   *
   * @note This overwrites `theme.json` on every build.
   *
   * @see {@link https://bud.js.org/extensions/sage/theme.json}
   * @see {@link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json}
   */
  app.wpjson
    .set('settings.color.custom', false)
    .set('settings.color.customDuotone', false)
    .set('settings.color.customGradient', false)
    .set('settings.color.defaultDuotone', false)
    .set('settings.color.defaultGradients', false)
    .set('settings.color.defaultPalette', false)
    .set('settings.color.duotone', [])
    .set('settings.custom.spacing', {})
    .set('settings.custom.typography.font-size', {})
    .set('settings.custom.typography.line-height', {})
    .set('settings.spacing.padding', true)
    .set('settings.spacing.units', ['px', '%', 'em', 'rem', 'vw', 'vh'])
    .set('settings.typography.customFontSize', false)
    .useTailwindColors()
    .useTailwindFontFamily()
    .useTailwindFontSize()
    .enable();
};

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  themes
} from '@bertiare-ui/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors: themes.light,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

export const lightTheme = createTheme('light-theme', {
  colors: themes.light
})

export const darkTheme = createTheme('dark-theme', {
  colors: themes.dark
});
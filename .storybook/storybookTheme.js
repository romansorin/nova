// https://storybook.js.org/docs/configurations/theming/
import { create } from '@storybook/theming'

import { Colors, Type } from 'app/styles'
// import { logo } from 'app/assets/images'

export default create({
  base: Colors.beige10,

  colorPrimary: Colors.brand10,
  colorSecondary: Colors.orange10,
  sidebarSvgIconColor: Colors.brand10,

  // UI
  // appBg: Colors.mediumGray,
  appContentBg: Colors.beige20,
  // appBorderColor: Colors.mediumGray,
  appBorderRadius: 6,

  // Typography
  fontBase: Type.fontFace,
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: Colors.brand10,
  // barBg: Colors.white,

  // Form colors
  inputBg: Colors.brand20,
  inputBorder: 'transparent',
  inputTextColor: Colors.gray10,
  inputBorderRadius: 6,

  brandTitle: 'Yawnch - Nova',
  brandUrl: 'https://yawnch.com',
  // brandImage: logo,
});

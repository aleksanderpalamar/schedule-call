import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from '@palamar-ui/tokens'

export const defaultTheme = {
  colors: {
    background: colors.gray900,
    text: colors.gray100,

    gray100: colors.gray100,
    gray200: colors.gray200,
    gray400: colors.gray400,
    gray500: colors.gray500,
    gray600: colors.gray600,
    gray700: colors.gray700,
    gray800: colors.gray800,
    gray900: colors.gray900,

    red: colors.red300,
    warning: colors.yellow300,

    purple300: colors.palamar300,
    purple500: colors.palamar500,
    purple700: colors.palamar700,    
  },
  fontSizes: {
    ...fontSizes,
  },
  fontWeights: {
    ...fontWeights,
  },
  fontFamilies: {
    body: fonts.default,
    code: fonts.code,
  },
  lineHeights: {
    ...lineHeights,
  },
  radii: {
    ...radii,
  },
  space: {
    ...space,
  },
  styles: {
    global: {
      bg: 'background',
      color: 'text',
      fontFamily: 'body',
    }
  }
} as const
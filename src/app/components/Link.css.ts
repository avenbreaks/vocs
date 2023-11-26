import { style } from '@vanilla-extract/css'

import { fontWeightVars, semanticColorVars, spaceVars } from '../styles/vars.css.js'

export const root = style({})

export const accent_underlined = style(
  {
    color: semanticColorVars.link,
    fontWeight: fontWeightVars.medium,
    textUnderlineOffset: spaceVars['2'],
    textDecoration: 'underline',
    selectors: {
      '&:hover': {
        color: semanticColorVars.linkHover,
      },
    },
  },
  'accent_underlined',
)

const colors = {
  basic: '#F3F4F6',
  basicLight: '#FFFFFF',
  basicLightWithOpacity: 'rgba(255, 255, 255, 0.5)',
  accent: {
    700: '#2D64B9',
    400: '#FFCB04',
    200: '#536DFE',
    100: '#D6DCFF',
    50: '#EAEDFF',
  },
  alert: '#D50000',
  overlay: 'rgba(33, 33, 33, 0.5)',
  coverPlaceholder: '#E0E0E0',
}

const textColors = {
  basic: '#2D64B9',
  basicLite: 'rgba(33, 33, 33, 0.6)',
  inverted: '#FFFFFF',
  link: '#BFBFBF',
} as const

const gradients = {
  basic: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 51.04%, #FFFFFF 100%)',
} as const

const shadows = {
  basic: 'box-shadow: 0px 16px 16px rgba(48, 79, 254, 0.2)',
} as const

const indents = {
  xxs: '8px',
  xs: '16px',
  s: '32px',
  m: '48px',
  l: '64px',
  xl: '128px',
} as const

const fontSize = {
  xxs: '12px',
  xs: '14px',
  s: '16px',
  m: '24px',
  l: '36px',
  xl: '48px',
  xxl: '64px',
} as const

const borderRadius = {
  s: '10px',
  m: '20px',
  l: '40px',
} as const

const breakpoints = {
  xs: 576,
  s: 768,
  m: 992,
  l: 1140,
} as const

export const baseLayoutIndents = {
  default: '32px',
  s: '24px',
  xs: '16px',
} as const

export const theme = {
  colors,
  textColors,
  gradients,
  shadows,
  indents,
  fontSize,
  borderRadius,
  breakpoints, // для emotion-flex-grid
  baseLayoutIndents,
}

export const media = {
  xs: `@media (max-width: ${breakpoints.xs}px)`,
  s: `@media (max-width: ${breakpoints.s}px)`,
  m: `@media (max-width: ${breakpoints.m}px)`,
  l: `@media (max-width: ${breakpoints.l}px)`,
} as const

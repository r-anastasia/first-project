const colors = {
  basic: '#F3F4F6',
  basicLight: '#FFFFFF',
  basicLightWithOpacity: 'rgba(255, 255, 255, 0.6)',
  accent: {
    700: '#2D64B9',
    400: '#FFCB04',
    200: 'rgba(45, 100, 185, 0.3)',
    100: '#D6DCFF',
    50: '#cccccc',
  },
  alert: '#D50000',
  overlay: 'rgba(33, 33, 33, 0.5)',
  coverPlaceholder: '#E0E0E0',
}

const textColors = {
  basic: '#2D64B9',
  basic2: '#8F8F8F',
  inverted: '#FFFFFF',
  link: '#bfbfbf',
} as const

const gradients = {
  basic: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 51.04%, #FFFFFF 100%)',
} as const

const shadows = {
  basic: '0px 7px 7px rgba(45, 100, 185, 0.3)',
  basicLite: '0px 6px 6px rgba(45, 100, 185, 0.1)',
} as const

const indents = {
  xxs: '8px',
  xs: '16px',
  s: '30px',
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
  xs: '5px',
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

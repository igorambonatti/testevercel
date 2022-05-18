export interface Breakpoints {
  xxs: string
  xs: string
  sm: string
  m: string
  l: string
  xl: string
}

const size = {
  xxs: '320px',
  xs: '375px',
  sm: '425px',
  m: '768px',
  l: '1024px',
  xl: '1550px'
}

export default {
  xxs: `(max-width: ${size.xxs})`,
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  m: `(max-width: ${size.m})`,
  l: `(max-width: ${size.l})`,
  xl: `(max-width: ${size.xl})`
} as Breakpoints

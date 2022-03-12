import { theme } from 'src/theme'
import { headerHeight, headerHeightMobile } from '../Header/consts'

export const baseLayoutId = 'base-layout'
export const pageTopIndent = `calc(${theme.indents.xs} + ${headerHeight}px + ${theme.indents.s})`
export const pageTopIndentMobile = `calc(${headerHeightMobile}px + ${theme.indents.s})`

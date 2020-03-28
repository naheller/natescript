const dark = '#0c0c0c'
const light = '#f2f2f2'

const themeShared = {
  headerHeightRem: 4,
  footerHeightRem: 4,
  borderWidthRem: 0.1
}

export const themeDark = {
  color: light,
  backgroundColor: dark,
  borderColor: light,
  boxShadowColor: light,
  ...themeShared
}

export const themeLight = {
  color: dark,
  backgroundColor: light,
  borderColor: dark,
  boxShadowColor: dark,
  ...themeShared
}

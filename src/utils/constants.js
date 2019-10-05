const hourOfDay = new Date().getHours()
const isNight = hourOfDay <= 6 || hourOfDay >= 18

const primaryColor = isNight ? '#0c0c0c' : '#f2f2f2'
const secondaryColor = isNight ? '#f2f2f2' : '#0c0c0c'

const themeShared = {
  headerHeightRem: 4,
  footerHeightRem: 4,
  borderWidthRem: 0.1
}

export const themeDark = {
  color: secondaryColor,
  backgroundColor: primaryColor,
  borderColor: secondaryColor,
  boxShadowColor: secondaryColor,
  ...themeShared
}

export const themeLight = {
  color: primaryColor,
  backgroundColor: secondaryColor,
  borderColor: primaryColor,
  boxShadowColor: primaryColor,
  ...themeShared
}

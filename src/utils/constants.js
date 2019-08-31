const themeShared = {
    headerHeightRem: 4,
    footerHeightRem: 4,
    borderWidthRem: 0.1
}

export const themeDark = {
    color: '#f2f2f2',
    backgroundColor: '#0c0c0c',
    borderColor: '#f2f2f2',
    boxShadowColor: '#f2f2f2',
    ...themeShared
}

export const themeLight = {
    color: '#0c0c0c',
    backgroundColor: '#f2f2f2',
    borderColor: '#0c0c0c',
    boxShadowColor: '#0c0c0c',
    ...themeShared
}

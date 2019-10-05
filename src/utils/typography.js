import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.75,
  headerFontFamily: ['Source Code Pro', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  googleFonts: [
    {
      name: 'Source Code Pro',
      styles: ['200', '200i', '300', '300i', '400', '400i', '600', '600i', '700', '700i']
    },
    {
      name: 'Source Sans Pro',
      styles: ['200', '200i', '300', '300i', '400', '400i', '600', '600i', '700', '700i']
    },
    {
      name: 'Source Serif Pro',
      styles: ['400', '600', '700']
    }
  ],
  overrideStyles: () => ({
    button: {
      fontFamily: 'Source Code Pro',
      fontWeight: 600,
      fontSize: '0.9rem'
    }
  })
})

typography.injectStyles()

export default typography

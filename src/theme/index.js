import colorScheme from './colorScheme'

// System font https://medium.com/designing-medium/system-shock-6b1dc6d6596f
const SystemFont =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

const theme = {
  variables: {
    /* eslint-disable sort-keys */
    'colorNeutral-100': colorScheme['Manatee-100'],
    'colorNeutral-200': colorScheme['Manatee-200'],
    'colorNeutral-300': colorScheme['Manatee-300'],
    'colorNeutral-500': colorScheme['Manatee-500'],
    'colorNeutral-700': colorScheme['Manatee-700'],

    'colorPrimary-50': colorScheme['DeepAquamarine-50'],
    'colorPrimary-100': colorScheme['DeepAquamarine-100'],
    'colorPrimary-500': colorScheme['DeepAquamarine-500'],

    'colorSecondary-500': colorScheme['LightSalmon-500'],

    'colorQuinary-500': colorScheme['SmokyBlack-500'],

    fontAccent: `'Montserrat', ${SystemFont}`,
    fontPrimary: `'PT Serif', ${SystemFont}`,

    maxWidth: '53rem'
    /* eslint-enable sort-keys */
  }
}

export default theme

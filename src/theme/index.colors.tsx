// theme.ts
export const light = {
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0 0)',
  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.145 0 0)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.145 0 0)',
  primary: 'oklch(0.55 0.25 260)',
  primaryForeground: 'oklch(1 0 0)',
  secondary: 'oklch(0.97 0 0)',
  secondaryForeground: 'oklch(0.205 0 0)',
  muted: 'oklch(0.97 0 0)',
  mutedForeground: 'oklch(0.556 0 0)',
  accent: 'oklch(0.97 0 0)',
  accentForeground: 'oklch(0.205 0 0)',
  destructive: 'oklch(0.577 0.245 27.325)',
  destructiveForeground: 'oklch(1 0 0)',
  border: 'oklch(0.922 0 0)',
  input: 'oklch(0.922 0 0)',
  ring: 'oklch(0.55 0.25 260)',
  chart1: 'oklch(0.646 0.222 41.116)',
  chart2: 'oklch(0.6 0.118 184.704)',
  chart3: 'oklch(0.398 0.07 227.392)',
  chart4: 'oklch(0.828 0.189 84.429)',
  chart5: 'oklch(0.769 0.188 70.08)',
  sidebar: 'oklch(0.985 0 0)',
  sidebarForeground: 'oklch(0.145 0 0)',
  sidebarPrimary: 'oklch(0.55 0.25 260)',
  sidebarPrimaryForeground: 'oklch(1 0 0)',
  sidebarAccent: 'oklch(0.97 0 0)',
  sidebarAccentForeground: 'oklch(0.205 0 0)',
  sidebarBorder: 'oklch(0.922 0 0)',
  sidebarRing: 'oklch(0.55 0.25 260)',
}

export const dark = {
  background: 'oklch(0.145 0 0)',
  foreground: 'oklch(0.985 0 0)',
  card: 'oklch(0.205 0 0)',
  cardForeground: 'oklch(0.985 0 0)',
  popover: 'oklch(0.205 0 0)',
  popoverForeground: 'oklch(0.985 0 0)',
  primary: 'oklch(0.65 0.22 260)',
  primaryForeground: 'oklch(0.145 0 0)',
  secondary: 'oklch(0.269 0 0)',
  secondaryForeground: 'oklch(0.985 0 0)',
  muted: 'oklch(0.269 0 0)',
  mutedForeground: 'oklch(0.708 0 0)',
  accent: 'oklch(0.269 0 0)',
  accentForeground: 'oklch(0.985 0 0)',
  destructive: 'oklch(0.704 0.191 22.216)',
  destructiveForeground: 'oklch(0.985 0 0)',
  border: 'oklch(1 0 0 / 10%)',
  input: 'oklch(1 0 0 / 15%)',
  ring: 'oklch(0.65 0.22 260)',
  chart1: 'oklch(0.488 0.243 264.376)',
  chart2: 'oklch(0.696 0.17 162.48)',
  chart3: 'oklch(0.769 0.188 70.08)',
  chart4: 'oklch(0.627 0.265 303.9)',
  chart5: 'oklch(0.645 0.246 16.439)',
  sidebar: 'oklch(0.205 0 0)',
  sidebarForeground: 'oklch(0.985 0 0)',
  sidebarPrimary: 'oklch(0.65 0.22 260)',
  sidebarPrimaryForeground: 'oklch(0.145 0 0)',
  sidebarAccent: 'oklch(0.269 0 0)',
  sidebarAccentForeground: 'oklch(0.985 0 0)',
  sidebarBorder: 'oklch(1 0 0 / 10%)',
  sidebarRing: 'oklch(0.65 0.22 260)',
}

export const theme = {
  light,
  dark,
}

export type ThemeMode = 'light' | 'dark'

export default function setGlobalColorTheme(themeMode: ThemeMode) {
  const selectedTheme = theme[themeMode] as { [key: string]: string }

  for (const key in selectedTheme) {
    document.documentElement.style.setProperty(`--${key}`, selectedTheme[key])
  }
}

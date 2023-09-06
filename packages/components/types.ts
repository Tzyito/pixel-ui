export const componentTheme = ['primary', 'success', 'warning', 'error'] as const;

export type ThemeType = (typeof componentTheme)[number];

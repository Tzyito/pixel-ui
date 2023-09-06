export interface Colors {
  [key: string]: (Colors & { DEFAULT?: string }) | string;
}
export interface ColorSystem {
  [key: string]: string;
}
export interface Theme {
  colors?: Colors;
  fontFamily?: Record<string, string>;
  boxShadow?: Record<'light' | 'dark', ColorSystem>;
}

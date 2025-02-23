type ColorKeys = "background" | "text" | "primary" | "gray" | "white";

export const COLORS: Record<ColorKeys, string> = {
  background: '#FFFCFC',
  text: '#181C20',
  primary: '#E50054',
  gray: '#65636D',
  white: '#FFFFFF',
} as const;

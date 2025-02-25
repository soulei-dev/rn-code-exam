type ColorKeys = "background" | "text" | "primary" | "gray" | "white" | "black";

export const COLORS: Record<ColorKeys, string> = {
  background: '#FFFCFC',
  text: '#181C20',
  primary: '#E50054',
  gray: '#65636D',
  white: '#FFFFFF',
  black: "#000"
} as const;

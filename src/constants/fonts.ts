
type FontKeys =
  | "BricolageGrotesque-Regular"
  | "BricolageGrotesque-SemiBold"
  | "BricolageGrotesque-ExtraBold"
  | "Poppins-Regular";

export const FONTS: Record<FontKeys, ReturnType<typeof require>> = {
  'BricolageGrotesque-Regular': require('@assets/fonts/BricolageGrotesque-Regular.ttf'),
  'BricolageGrotesque-SemiBold': require('@assets/fonts/BricolageGrotesque-SemiBold.ttf'),
  'BricolageGrotesque-ExtraBold': require('@assets/fonts/BricolageGrotesque-ExtraBold.ttf'),
  'Poppins-Regular': require('@assets/fonts/Poppins-Regular.ttf'),
} as const;

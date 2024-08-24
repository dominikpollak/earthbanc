export type Breakpoint =
  | "mobile"
  | "tablet"
  | "desktopS"
  | "desktopM"
  | "desktopL"
  | "desktopXL";

export const breakpoints: Record<Breakpoint, number> = {
  mobile: 0,
  tablet: 768,
  desktopS: 1024,
  desktopM: 1360,
  desktopL: 1680,
  desktopXL: 1920,
};

export const media = {
  mobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
  desktopS: `@media screen and (min-width: ${breakpoints.desktopS}px)`,
  desktopM: `@media screen and (min-width: ${breakpoints.desktopM}px)`,
  desktopL: `@media screen and (min-width: ${breakpoints.desktopL}px)`,
  desktopXL: `@media screen and (min-width: ${breakpoints.desktopXL}px)`,
};

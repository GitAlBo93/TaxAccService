export const colors = {
  neutralWhite: 'rgba(255, 255, 255, 1)',
  backgroundSecondary: 'rgba(241, 242, 244, 1)',

  neutral60: 'rgba(100, 105, 115, 1)',

  primary60Main: 'rgba(0, 98, 255, 1)',
} as const;

export type ColorKey = keyof typeof colors;

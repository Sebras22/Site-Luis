import { createTheme, type MantineColorsTuple } from '@mantine/core';

// Vert forêt (accents) et neutres teintés vert pour le thème sombre.
const forest: MantineColorsTuple = ['#eef6ef', '#d9eadc', '#b3d3b9', '#88ba92', '#63a372', '#4b9460', '#3e8955', '#2f7545', '#25613a', '#1b4a2b'];
const dark: MantineColorsTuple = ['#f3ecd9', '#e0d8c2', '#c4bda8', '#a3a08a', '#7a8a76', '#4a6552', '#33503f', '#1f382a', '#162a1f', '#0e1c14'];

export const theme = createTheme({
  colors: { forest, dark },
  primaryColor: 'forest',
  primaryShade: { light: 8, dark: 4 },
  autoContrast: true,
  fontFamily: '"Source Sans 3", system-ui, sans-serif',
  headings: { fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: '600' },
  defaultRadius: 'md',
});

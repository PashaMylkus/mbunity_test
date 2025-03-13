/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createTheme } from '@kuma-ui/core';

const theme = createTheme({});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;

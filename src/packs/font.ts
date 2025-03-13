import { Inter, Manrope, Poppins, Roboto } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});
export const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});
export const roboto = Roboto({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});
export const manrope = Manrope({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
});

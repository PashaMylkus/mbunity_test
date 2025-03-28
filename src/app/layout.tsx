import type { Metadata } from 'next';
import './globals.css';
import { inter, manrope, poppins, roboto } from '@/packs/font';
import { MainLayout } from '@/tree/layout/layout';
import { KumaRegistry } from '@kuma-ui/next-plugin/registry';

export const metadata: Metadata = {
  title: 'Mylkus Pavlo | Test app',
  description: 'Mbunity Development - React.js Technical Assessment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JsxElement {
  return (
    <html lang="en">
      <KumaRegistry>
        <body className={`${poppins.variable}  ${inter.variable} ${roboto.variable} ${manrope.variable} antialiased`}>
          <MainLayout>{children}</MainLayout>
        </body>
      </KumaRegistry>
    </html>
  );
}

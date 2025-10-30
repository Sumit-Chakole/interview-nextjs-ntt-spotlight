import './globals.scss';
import type { Metadata } from 'next';
import { Noto_Serif } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NTT Data',
  description: 'NTT Data is a leading IT consulting firm',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSerif.className}>{children}</body>
    </html>
  );
}

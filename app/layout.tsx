import type { Metadata } from "next";
import localFont from 'next/font/local';
import { StoreProvider } from '@/config/provider/StoreProvider';
import '@/styles/global.scss';

const solaiman_lipi = localFont({
  src: '../styles/fonts/solaimanlipi.woff',
  display: 'swap',
  preload: true,
  variable: '--font-solaiman_lipi',
});

const shurjo = localFont({
  src: [
    {
      path: '../styles/fonts/Shurjo_400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Shurjo_700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
  variable: '--font-shurjo',
});

export const metadata: Metadata = {
  title: {
    template: '%s | 24onbd',
    default: 'Stay Connected to the World with 24onbd',
  },
  description:
    'Comprehensive up-to-date news coverage, Aggregated from Bangladesh all National News Portal. Get the latest Bangladesh News updates on current events, politics, economy, culture, and more.',
  metadataBase: new URL('https://www.24onbd.com/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${solaiman_lipi.variable} ${shurjo.variable}`}>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

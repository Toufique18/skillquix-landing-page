import { Inter } from 'next/font/google';
import { ThemeProvider } from './providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

import GoogleAuthProvider from './google-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        <GoogleAuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </GoogleAuthProvider>
      </body>
    </html>
  );
}
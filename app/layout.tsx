import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';


const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'EXINX | Extended Intelligence • Nova • Orbis • Astra',
  description: 'Extended Intelligence X-Factor (EXINX) - Pure EduTech Engineering featuring Nova, Orbis, and Astra ecosystems.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased overflow-x-hidden selection:bg-accent/30 selection:text-accent`} suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
            <ScrollToTop />
          </SmoothScrollProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Montserrat, Barlow, Instrument_Serif } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import VismeFormModal from '@/components/ui/VismeFormModal';
import OrbisSignalModal from '@/components/ui/OrbisSignalModal';
import './globals.css';


const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: ['400'],
  style: ['italic'],
});

export const metadata: Metadata = {
  title: 'EXINX | Extended Intelligence • Nova • Orbis • Iyota',
  description: 'Extended Intelligence X-Factor (EXINX) - Pure EduTech Engineering featuring Nova, Orbis, and IyotaPrep ecosystems.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${barlow.variable} ${instrumentSerif.variable} antialiased overflow-x-hidden selection:bg-accent/30 selection:text-accent`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <div className="relative z-50">
              <Navbar />
            </div>
            {children}
            <ScrollToTop />
            <VismeFormModal />
            <OrbisSignalModal />
          </SmoothScrollProvider>
        </ThemeProvider>


      </body>
    </html>
  );
}

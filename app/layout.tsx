import { Montserrat, Barlow, Instrument_Serif } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import VismeFormModal from '@/components/ui/VismeFormModal';
import OrbisSignalModal from '@/components/ui/OrbisSignalModal';
import './globals.css';
import { constructMetadata } from '@/lib/seo';
import { SchemaMarkup, getOrganizationSchema } from '@/components/seo/SchemaMarkup';

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://exinx.com';

export const metadata = constructMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup data={getOrganizationSchema(SITE_URL)} />
      </head>
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

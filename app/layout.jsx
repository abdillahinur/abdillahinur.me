import '@/styles/globals.css';
import { ThemeProviders } from '@/components/ThemeProviders';
import Head from 'next/head'; // Import Head

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Global title and meta description for all pages */}
        <title>Abdillahi Nur - Portfolio</title>
        <meta name="description" content="Welcome to Abdillahi Nur's portfolio showcasing skills, experience, projects, and tech insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}

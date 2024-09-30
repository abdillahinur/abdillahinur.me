// app/layout.jsx

import '@/styles/globals.css';
import { ThemeProviders } from '@/components/ThemeProviders';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}

import '@/styles/globals.css';
import StarsCanvas from '@/components/StarBackground';

export const metadata = {
  title: 'Abdillahi Nur - Portfolio',
  description: 'Welcome to Abdillahi Nur\'s portfolio showcasing skills, experience, projects, and tech insights.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="night-sky min-h-screen text-white">
        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
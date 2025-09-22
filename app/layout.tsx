import type { Metadata, Viewport } from 'next';
import "../styles/globals.css";

export const metadata: Metadata = {
  title: 'Common Name Service',
  description: 'Fan-made Common Name Service',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen bg-[url('/background.png')] bg-cover bg-center">
        <header className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-4 py-2 md:py-3 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200">
          {/* Sol Logo */}
          <div className="justify-self-start">
            <img src="/commonlogo.png" alt="Common Logo" className="h-8 md:h-10" />
          </div>
          {/* Orta Başlık */}
          <h1 className="justify-self-center text-lg md:text-2xl font-extrabold text-blue-500">
            Common Name Service
          </h1>
          {/* Sağ Boşluk */}
          <div className="justify-self-end w-8 md:w-20"></div>
        </header>

        <main className="flex-1 pt-12 md:pt-16">
          {children}
        </main>
      
        <footer className="w-full text-center p-4 bg-gray-900 text-white">
          <p className="text-xs md:text-sm">
            This is an unofficial site created by @deshuu_ for Common Name Service.
          </p>
        </footer>
      </body>
    </html>
  );
}
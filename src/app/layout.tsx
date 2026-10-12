import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'DevLeonJA | Portfolio',
  description: 'Portfolio personal de Juan Antonio León Cobos. Desarrollo web y de aplicaciones con Next.js, TypeScript y Tailwind CSS.',
  authors: [
    {
      name: 'Juan Antonio León Cobos',
    },
  ],
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'MiPortfolio',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/icon0.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon1.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

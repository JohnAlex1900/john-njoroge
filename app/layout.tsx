import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'John Njoroge | Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer specializing in React, Next.js, and React Native. Building scalable web applications and high-performance digital platforms.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript'],
  authors: [{ name: 'John Njoroge' }],
  creator: 'John Njoroge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johnn.dev',
    title: 'John Njoroge | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer specializing in React, Next.js, and React Native.',
    siteName: 'John Njoroge Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Njoroge | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer specializing in React, Next.js, and React Native.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
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

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '이재복 | 경력기술서',
  description: '이재복 Data Scientist 경력기술서',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

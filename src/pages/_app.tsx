import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${inter.className} scroll-smooth`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

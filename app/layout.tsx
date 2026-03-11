import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best Lodge in Chilika | Budget Hotel near Chilika Lake - O New Star",
  description:
    "Looking for the best hotel in Chilika? O New Star Lodge offers budget-friendly, AC rooms near Chilika Lake. Book now for a comfortable stay near the railway station.",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans antialiased`} suppressHydrationWarning>
          {children}
          <Toaster position="top-center" richColors />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}

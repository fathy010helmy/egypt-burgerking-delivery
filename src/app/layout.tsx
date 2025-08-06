  // src/app/layout.tsx
  import "./globals.css"
  import { AuthProvider } from "@/context/AuthContext" // مسار AuthContext
  import type { Metadata } from "next"

  export const metadata: Metadata = {
    title: "BurgerKing Delivery",
    description: "Login and order delicious food",
  }

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <AuthProvider>
            {children}
          </AuthProvider>
        </body>
      </html>
    )
  }

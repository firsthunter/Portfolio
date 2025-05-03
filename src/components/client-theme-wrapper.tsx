'use client'

import { ThemeProvider } from "@/components/ui/theme-provider"
import { ThemeToggle } from "./theme-toggle"

export function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="relative">
        <ThemeToggle />
        {children}
      </main>
    </ThemeProvider>
  )
}

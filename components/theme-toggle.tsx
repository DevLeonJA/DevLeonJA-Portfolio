"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useSyncExternalStore } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9">
        <span className="sr-only">Cambiar tema</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-foreground" />
      ) : (
        <Moon className="h-5 w-5 text-foreground" />
      )}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}

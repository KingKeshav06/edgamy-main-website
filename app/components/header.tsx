"use client"

import { cn } from "@/utils"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import { useState } from "react"

const navItems = [
  {
    label: "Home",
    path: "#home",
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Benefits",
    path: "#benefits",
  },
  {
    label: "FAQ",
    path: "#faq",
  },
  {
    label: "Contact",
    path: "#pricing",
    isCta: true,
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 transition-all duration-300 shadow-md bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm">
      <nav className="h-16 flex items-center justify-between container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          Edgamy
        </Link>
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={cn(
                "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors duration-200",
                item.isCta &&
                  "bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 border border-transparent"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="cursor-pointer inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-neutral-900 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={cn(
                  "block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-neutral-800",
                  item.isCta &&
                    "text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

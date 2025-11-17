'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À Propos', href: '/about' },
    { label: 'Produits', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="container-wide flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="relative w-10 h-10">
            <Image
              src="/logo2.png"
              alt="Fab Tower Logo"
              fill
              className="object-contain rounded-sm"
            />
          </div>
          <span className="text-foreground">FAB TOWER</span>
        </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="mailto:fabtower.contact@gmail.com"
            className="hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Nous Contacter
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>


      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-border">
          <nav className="container-wide py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:fabtower.contact@gmail.com"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-center"
            >
              Nous Contacter
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

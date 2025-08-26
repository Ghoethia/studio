'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Leaf className="h-8 w-8 text-accent" />
          <span className="font-bold text-2xl font-headline text-foreground">Montecarlo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-accent transition-colors font-headline"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            <Link href="#contacto">
              <Phone className="mr-2 h-4 w-4" />
              Cotizar Ahora
            </Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false} onClick={closeMobileMenu}>
                  <Leaf className="h-6 w-6 text-accent" />
                  <span className="font-bold text-xl font-headline">Montecarlo</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                     <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium hover:text-accent transition-colors font-headline"
                      onClick={closeMobileMenu}
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full mt-4">
                  <Link href="#contacto" onClick={closeMobileMenu}>
                    <Phone className="mr-2 h-4 w-4" />
                    Cotizar Ahora
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

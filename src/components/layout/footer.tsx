import { Leaf, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-accent" />
          <span className="text-lg font-headline font-semibold">Montecarlo</span>
        </div>
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Montecarlo. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-muted-foreground hover:text-accent transition-colors" prefetch={false}>
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-accent transition-colors" prefetch={false}>
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-accent transition-colors" prefetch={false}>
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

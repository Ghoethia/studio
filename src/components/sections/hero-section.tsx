import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Fondo de construcción"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="construction landscape"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 md:px-6 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Construyendo Sueños, Creando Realidades
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90 font-body">
          Transformamos tus ideas en proyectos excepcionales con calidad, innovación y compromiso.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#proyectos" prefetch={false}>Ver Proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

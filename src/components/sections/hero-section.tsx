
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const images = [
  {
    src: 'https://picsum.photos/1920/1080',
    alt: 'Bosque frondoso representando la naturaleza y el medio ambiente',
    aiHint: 'lush forest landscape',
  },
  {
    src: 'https://picsum.photos/1920/1081',
    alt: 'Científico realizando un estudio de suelo en el campo',
    aiHint: 'environmental scientist field',
  },
  {
    src: 'https://picsum.photos/1920/1082',
    alt: 'Parque eólico como ejemplo de energía sostenible',
    aiHint: 'wind turbines sustainable',
  },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          className={cn(
            'object-cover transition-opacity duration-1000 ease-in-out',
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          )}
          data-ai-hint={image.aiHint}
        />
      ))}
      <div className="absolute inset-0 bg-background/60 z-10" />
      <div className="relative z-20 container mx-auto px-4 md:px-6 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-accent">
          Soluciones Ambientales para un Futuro Sostenible
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90 font-body">
          En Montecarlo, combinamos ciencia y tecnología para ofrecer consultoría ambiental de vanguardia. Impulsamos el desarrollo responsable a través de estudios de suelo, planes de manejo y evaluaciones de impacto precisas.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            <Link href="#contacto" prefetch={false}>Solicita una consulta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

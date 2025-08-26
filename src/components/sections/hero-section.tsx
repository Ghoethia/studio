
'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",.<>?/`~';
    const charactersArray = characters.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(21, 38, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'hsl(var(--accent))'; // Usar el color de acento del tema
      ctx.font = `${fontSize}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 33);
    
    window.addEventListener('resize', setCanvasDimensions);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center text-center text-white">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      <div className="absolute inset-0 bg-background/80 z-10" />
      <div className="relative z-20 container mx-auto px-4 md:px-6 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-accent">
          Innovación, Sostenibilidad, Futuro
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90 font-body">
          Consultoría ambiental experta para un desarrollo responsable. Realizamos estudios de suelo, planes de manejo y evaluaciones de impacto.
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

'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const sliderItems = [
  {
    title: 'Soluciones Ambientales Innovadoras',
    description: 'Combinamos ciencia y tecnología para ofrecer consultoría de vanguardia, impulsando el desarrollo responsable.',
    imageUrl: "https://picsum.photos/1920/1080?random=1",
  },
  {
    title: 'Estudios de Suelo de Precisión',
    description: 'Análisis detallados para garantizar la viabilidad y sostenibilidad de tus proyectos de construcción y agricultura.',
    imageUrl: "https://picsum.photos/1920/1080?random=2",
  },
  {
    title: 'Planes de Manejo Sostenible',
    description: 'Diseñamos estrategias para la conservación de recursos y el cumplimiento de la normativa ambiental vigente.',
    imageUrl: "https://picsum.photos/1920/1080?random=3",
  },
  {
    title: 'Evaluación de Impacto Ambiental',
    description: 'Realizamos estudios rigurosos para identificar, predecir y mitigar los impactos ambientales de tus proyectos.',
    imageUrl: "https://picsum.photos/1920/1080?random=4",
  },
  {
    title: 'Consultoría en Energías Renovables',
    description: 'Te asesoramos en la transición hacia fuentes de energía limpias y sostenibles para un futuro más verde.',
    imageUrl: "https://picsum.photos/1920/1080?random=5",
  },
  {
    title: 'Recuperación de Ecosistemas',
    description: 'Implementamos programas de reforestación y restauración para devolver la vida a áreas degradadas.',
    imageUrl: "https://picsum.photos/1920/1080?random=6",
  },
];

export default function HeroSlider() {
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const activate = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const items = slider.querySelectorAll('.item');
      if (target.matches('.next')) {
        slider.append(items[0]);
      }
      if (target.matches('.prev')) {
        slider.prepend(items[items.length-1]);
      }
    };
    
    document.addEventListener('click', activate);

    return () => {
      document.removeEventListener('click', activate);
    };
  }, []);

  return (
    <section id="hero-slider" className="relative h-screen w-full overflow-hidden">
      <main>
        <ul className='slider' ref={sliderRef}>
          {sliderItems.map((item, index) => (
            <li key={index} className='item' style={{ backgroundImage: `url('${item.imageUrl}')` }}>
              <div className='content'>
                <h2 className='title'>{item.title}</h2>
                <p className='description'>{item.description}</p>
                <Link href="#contacto">
                  <button>Solicitar Consulta</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <nav className='nav'>
          {/* @ts-ignore */}
          <ion-icon class='btn prev' name="arrow-back-outline"></ion-icon>
          {/* @ts-ignore */}
          <ion-icon class='btn next' name="arrow-forward-outline"></ion-icon>
        </nav>
      </main>
    </section>
  );
}

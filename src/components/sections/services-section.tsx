import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Map, ShieldCheck, Wind, Droplets, Unplug, Layers, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  aiHint: string;
}

const services: Service[] = [
  {
    title: 'Planificación Territorial',
    description: 'Elaboramos planes de ordenamiento (POT) y parciales, con diagnósticos precisos y cartografía detallada para un desarrollo equilibrado.',
    icon: Map,
    image: 'https://picsum.photos/600/400?random=7',
    aiHint: 'territorial planning map'
  },
  {
    title: 'Gestión Ambiental',
    description: 'Realizamos auditorías, consultorías y ofrecemos acompañamiento técnico y jurídico para el cumplimiento de la normativa ambiental.',
    icon: ShieldCheck,
    image: 'https://picsum.photos/600/400?random=8',
    aiHint: 'environmental management'
  },
  {
    title: 'Estudios de Impacto',
    description: 'Desarrollamos Estudios de Impacto Ambiental (EIA) y Diagnósticos Ambientales (DAA) para evaluar la viabilidad de tus proyectos.',
    icon: Wind,
    image: 'https://picsum.photos/600/400?random=9',
    aiHint: 'wind turbines field'
  },
  {
    title: 'Estudios Hidrológicos',
    description: 'Análisis hidrológicos e hidráulicos para una gestión eficiente del recurso hídrico y la caracterización de cuencas.',
    icon: Droplets,
    image: 'https://picsum.photos/600/400?random=10',
    aiHint: 'water study river'
  },
  {
    title: 'Gestión del Riesgo',
    description: 'Formulamos Planes de Gestión del Riesgo (PGR) para prevenir y mitigar desastres naturales y antrópicos.',
    icon: Unplug,
    image: 'https://picsum.photos/600/400?random=11',
    aiHint: 'risk analysis chart'
  },
  {
    title: 'Cartografía y Geodatabase',
    description: 'Generamos geodatabases, mapas temáticos y realizamos correcciones cartográficas con alta precisión para tus análisis territoriales.',
    icon: Layers,
    image: 'https://picsum.photos/600/400?random=12',
    aiHint: 'topographic map'
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Nuestros Servicios</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ofrecemos una gama completa de soluciones en consultoría ambiental para impulsar un desarrollo sostenible.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <Image
                src={service.image}
                alt={`Imagen de ${service.title}`}
                data-ai-hint={service.aiHint}
                width={600}
                height={400}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90"></div>
              <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <div className="mx-auto bg-accent/20 text-white backdrop-blur-sm rounded-full p-3 mb-4 border border-white/20">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl text-shadow mb-2">{service.title}</CardTitle>
                <CardDescription className="text-white/90 font-body text-shadow-sm transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-screen group-hover:opacity-100 group-hover:mt-2">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

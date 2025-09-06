import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ClipboardPenLine, Wind, Sprout, ShieldCheck, Mountain, Beaker, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  aiHint: string;
}

const services: Service[] = [
  {
    title: 'Estudios de Suelo',
    description: 'Análisis y caracterización de suelos para proyectos de construcción, agrícolas y de conservación.',
    icon: Beaker,
    image: 'https://picsum.photos/600/400?random=7',
    aiHint: 'soil analysis lab'
  },
  {
    title: 'Planes Ambientales',
    description: 'Diseño de planes de manejo y seguimiento ambiental para garantizar la sostenibilidad de sus operaciones.',
    icon: ClipboardPenLine,
    image: 'https://picsum.photos/600/400?random=8',
    aiHint: 'environmental plan document'
  },
  {
    title: 'Evaluación de Impacto',
    description: 'Realizamos evaluaciones de impacto ambiental (EIA) rigurosas y conformes a la normativa vigente.',
    icon: Wind,
    image: 'https://picsum.photos/600/400?random=9',
    aiHint: 'wind turbines field'
  },
  {
    title: 'Gestión de Residuos',
    description: 'Soluciones integrales para la gestión, tratamiento y valorización de residuos sólidos y peligrosos.',
    icon: Sprout,
    image: 'https://picsum.photos/600/400?random=10',
    aiHint: 'recycling plant'
  },
  {
    title: 'Consultoría en Sostenibilidad',
    description: 'Asesoría estratégica para integrar prácticas sostenibles y de responsabilidad social en su negocio.',
    icon: ShieldCheck,
    image: 'https://picsum.photos/600/400?random=11',
    aiHint: 'sustainable city'
  },
  {
    title: 'Estudios de Riesgo',
    description: 'Análisis y evaluación de riesgos naturales y antrópicos para la planificación y prevención.',
    icon: Mountain,
    image: 'https://picsum.photos/600/400?random=12',
    aiHint: 'landslide risk analysis'
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
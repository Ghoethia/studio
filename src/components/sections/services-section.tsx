import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardPenLine, Home, Paintbrush, Trees, Building, Wrench, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Pintura de Fachadas',
    description: 'Especialistas en pintura exterior que protege y embellece tu propiedad con acabados duraderos.',
    icon: Building,
  },
  {
    title: 'Pintura de Interiores',
    description: 'Renovamos tus espacios interiores con colores y técnicas que reflejan tu estilo personal.',
    icon: Home,
  },
  {
    title: 'Remodelaciones',
    description: 'Transformamos y modernizamos tus espacios para darles una nueva vida y mayor funcionalidad.',
    icon: Paintbrush,
  },
  {
    title: 'Impermeabilización',
    description: 'Protegemos tu inversión con sistemas de impermeabilización de alta calidad para techos y muros.',
    icon: Wrench,
  },
  {
    title: 'Diseño y Decoración',
    description: 'Te asesoramos en la elección de colores y acabados para crear ambientes únicos y armoniosos.',
    icon: ClipboardPenLine,
  },
  {
    title: 'Mantenimiento General',
    description: 'Ofrecemos servicios de mantenimiento para garantizar la longevidad y belleza de tus espacios.',
    icon: Trees,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Nuestros Servicios</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ofrecemos una gama completa de soluciones en pintura y remodelación para transformar tus espacios.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col items-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full p-4 mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

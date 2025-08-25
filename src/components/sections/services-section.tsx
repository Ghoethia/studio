import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardPenLine, Home, Paintbrush, Trees, Building, Wrench, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Diseño Arquitectónico',
    description: 'Creamos planos y diseños innovadores y funcionales adaptados a tus necesidades.',
    icon: ClipboardPenLine,
  },
  {
    title: 'Construcción Residencial',
    description: 'Edificamos hogares de alta calidad, desde cimientos hasta el último detalle.',
    icon: Home,
  },
  {
    title: 'Remodelaciones',
    description: 'Transformamos y modernizamos tus espacios para darles una nueva vida.',
    icon: Paintbrush,
  },
  {
    title: 'Proyectos Comerciales',
    description: 'Desarrollamos locales, oficinas y edificios comerciales a gran escala.',
    icon: Building,
  },
  {
    title: 'Diseño de Paisajes',
    description: 'Integramos la naturaleza en tus proyectos con diseños de jardines y exteriores.',
    icon: Trees,
  },
  {
    title: 'Mantenimiento y Reparación',
    description: 'Ofrecemos servicios post-construcción para garantizar la longevidad de tu inversión.',
    icon: Wrench,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Nuestros Servicios</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ofrecemos una gama completa de servicios para cubrir todas las fases de tu proyecto, garantizando excelencia y profesionalismo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col items-center p-6">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 mb-4">
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

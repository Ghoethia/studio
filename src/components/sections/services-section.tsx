import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardPenLine, Wind, Sprout, ShieldCheck, Mountain, Beaker, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Estudios de Suelo',
    description: 'Análisis y caracterización de suelos para proyectos de construcción, agrícolas y de conservación.',
    icon: Beaker,
  },
  {
    title: 'Planes Ambientales',
    description: 'Diseño de planes de manejo y seguimiento ambiental para garantizar la sostenibilidad de sus operaciones.',
    icon: ClipboardPenLine,
  },
  {
    title: 'Evaluación de Impacto',
    description: 'Realizamos evaluaciones de impacto ambiental (EIA) rigurosas y conformes a la normativa vigente.',
    icon: Wind,
  },
  {
    title: 'Gestión de Residuos',
    description: 'Soluciones integrales para la gestión, tratamiento y valorización de residuos sólidos y peligrosos.',
    icon: Sprout,
  },
  {
    title: 'Consultoría en Sostenibilidad',
    description: 'Asesoría estratégica para integrar prácticas sostenibles y de responsabilidad social en su negocio.',
    icon: ShieldCheck,
  },
  {
    title: 'Estudios de Riesgo',
    description: 'Análisis y evaluación de riesgos naturales y antrópicos para la planificación y prevención.',
    icon: Mountain,
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

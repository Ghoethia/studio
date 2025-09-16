import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Planificación Territorial',
    imageUrl: 'https://picsum.photos/seed/planning/800/600',
    imageHint: 'city aerial map',
    description: 'Desarrollamos instrumentos de planificación para guiar el crecimiento y uso del suelo de manera sostenible, asegurando el cumplimiento normativo y la protección de los recursos naturales para un futuro equilibrado.',
    services: [
      'Diagnóstico y formulación de Planes de Ordenamiento Territorial (POT).',
      'Diagnóstico y formulación de Planes Parciales.',
      'Correcciones cartográficas y análisis geoespacial.',
    ],
  },
  {
    title: 'Gestión Ambiental',
    imageUrl: 'https://picsum.photos/seed/management/800/600',
    imageHint: 'environmental audit checklist',
    description: 'Ofrecemos un soporte integral para que las organizaciones cumplan con la legislación ambiental, optimicen sus procesos y mejoren su desempeño de manera proactiva, eficiente y responsable.',
    services: [
      'Auditorías ambientales, consultoría y outsourcing.',
      'Elaboración y seguimiento a indicadores ambientales.',
      'Acompañamiento técnico y jurídico en procesos sancionatorios.',
    ],
  },
  {
    title: 'Estudios Ambientales',
    imageUrl: 'https://picsum.photos/seed/studies/800/600',
    imageHint: 'scientist field research',
    description: 'Realizamos análisis técnicos y científicos para evaluar la viabilidad de proyectos, garantizando su armonía con el entorno natural y el estricto cumplimiento de la normativa vigente en cada jurisdicción.',
    services: [
      'Estudios de Impacto Ambiental (EIA).',
      'Diagnósticos Ambientales de Alternativas (DAA).',
      'Planes de Manejo Ambiental (PMA).',
      'Estudios hidrológicos e hidráulicos.',
      'Caracterización de flora y fauna.',
      'Planes de Gestión del Riesgo (PGR).',
    ],
  },
  {
    title: 'Otros Servicios Especializados',
    imageUrl: 'https://picsum.photos/seed/specialized/800/600',
    imageHint: 'drone topographic survey',
    description: 'Brindamos soluciones técnicas avanzadas y análisis de datos geoespaciales para complementar sus proyectos con información precisa, detallada y de alto valor para la toma de decisiones estratégicas.',
    services: [
      'Mediciones de calidad de aire y ruido ambiental.',
      'Elaboración de Geodatabase y mapas temáticos.',
      'Estudios topográficos y permisos ambientales.',
    ],
  },
];

const benefits = [
    "Optimización de recursos y reducción de costos operativos.",
    "Cumplimiento garantizado de la normativa ambiental vigente.",
    "Mejora de la reputación corporativa y la imagen de marca.",
    "Acceso a un equipo multidisciplinario de expertos.",
    "Decisiones informadas basadas en datos precisos y actualizados.",
    "Prevención de sanciones y mitigación de riesgos ambientales."
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Nuestros Servicios</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ofrecemos una gama completa de soluciones en consultoría ambiental, adaptadas a las necesidades de cada proyecto para garantizar el desarrollo sostenible y el cumplimiento normativo.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <div key={category.title} className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <Image
                  src={category.imageUrl}
                  width={800}
                  height={600}
                  alt={`Imagen representativa de ${category.title}`}
                  data-ai-hint={category.imageHint}
                  className="rounded-xl shadow-lg object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline text-primary">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Beneficios de Elegirnos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Aliarse con Montecarlo significa invertir en la sostenibilidad y el éxito a largo plazo de sus proyectos.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit) => (
                    <div key={benefit} className="bg-card p-6 rounded-lg shadow-sm flex items-start gap-4 transition-all hover:shadow-md hover:-translate-y-1">
                        <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                            <CheckCircle className="h-6 w-6 text-accent" />
                        </div>
                        <p className="text-card-foreground">{benefit}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}

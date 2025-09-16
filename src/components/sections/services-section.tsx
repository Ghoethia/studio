import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Planificación Territorial',
    imageUrl: 'https://picsum.photos/seed/planning/800/600',
    imageHint: 'city aerial map',
    description: 'Desarrollamos instrumentos de planificación para guiar el crecimiento y uso del suelo de manera sostenible, asegurando el cumplimiento normativo y la protección de los recursos naturales para un futuro equilibrado.',
    services: [
      { 
        name: 'Planes de Ordenamiento Territorial (POT)',
        description: 'Realizamos el diagnóstico y la formulación de planes maestros que definen el uso del suelo a nivel municipal o regional para promover un desarrollo organizado y sostenible.'
      },
      { 
        name: 'Planes Parciales',
        description: 'Elaboramos instrumentos detallados para desarrollar porciones específicas del territorio, asegurando su correcta articulación con el Plan de Ordenamiento Territorial.'
      },
      { 
        name: 'Cartografía y Análisis Geoespacial',
        description: 'Ofrecemos servicios de corrección, actualización y análisis de datos geográficos para la toma de decisiones informadas sobre el territorio.'
      },
    ],
  },
  {
    title: 'Gestión Ambiental',
    imageUrl: 'https://picsum.photos/seed/management/800/600',
    imageHint: 'environmental audit checklist',
    description: 'Ofrecemos un soporte integral para que las organizaciones cumplan con la legislación ambiental, optimicen sus procesos y mejoren su desempeño de manera proactiva, eficiente y responsable.',
    services: [
      {
        name: 'Auditorías y Consultoría Ambiental',
        description: 'Evaluamos el cumplimiento normativo y el desempeño ambiental de su organización, identificando oportunidades de mejora y ofreciendo soluciones de outsourcing.'
      },
      {
        name: 'Indicadores Ambientales',
        description: 'Diseñamos y realizamos el seguimiento de indicadores clave para medir y comunicar de forma efectiva el desempeño ambiental de sus proyectos y operaciones.'
      },
      {
        name: 'Acompañamiento Técnico y Jurídico',
        description: 'Brindamos soporte especializado en procesos sancionatorios y preventivos de carácter ambiental para garantizar la defensa de sus intereses.'
      },
    ],
  },
  {
    title: 'Estudios Ambientales',
    imageUrl: 'https://picsum.photos/seed/studies/800/600',
    imageHint: 'scientist field research',
    description: 'Realizamos análisis técnicos y científicos para evaluar la viabilidad de proyectos, garantizando su armonía con el entorno natural y el estricto cumplimiento de la normativa vigente en cada jurisdicción.',
    services: [
      {
        name: 'Estudio de Impacto Ambiental (EIA)',
        description: 'Identificamos y evaluamos los posibles impactos de un proyecto sobre el medio ambiente para proponer medidas de manejo efectivas y obtener la viabilidad ambiental.'
      },
      {
        name: 'Diagnóstico Ambiental de Alternativas (DAA)',
        description: 'Analizamos diferentes opciones de un proyecto para seleccionar la alternativa que presente las menores afectaciones ambientales y sociales.'
      },
      {
        name: 'Planes de Manejo Ambiental (PMA)',
        description: 'Diseñamos el conjunto de programas y acciones para prevenir, mitigar, corregir y compensar los impactos ambientales identificados para un proyecto.'
      },
      {
        name: 'Estudios Hidrológicos e Hidráulicos',
        description: 'Analizamos el comportamiento del agua en su entorno para determinar su disponibilidad, calidad y los posibles riesgos asociados a proyectos.'
      },
    ],
  },
  {
    title: 'Otros Servicios Especializados',
    imageUrl: 'https://picsum.photos/seed/specialized/800/600',
    imageHint: 'drone topographic survey',
    description: 'Brindamos soluciones técnicas avanzadas y análisis de datos geoespaciales para complementar sus proyectos con información precisa, detallada y de alto valor para la toma de decisiones estratégicas.',
    services: [
      {
        name: 'Calidad de Aire y Ruido Ambiental',
        description: 'Realizamos mediciones y modelaciones para evaluar los niveles de contaminantes en el aire y la presión sonora, garantizando el cumplimiento de los estándares.'
      },
      {
        name: 'Geodatabase y Mapas Temáticos',
        description: 'Estructuramos y administramos bases de datos geográficas (Geodatabase) y creamos cartografía especializada para visualizar y analizar información espacial.'
      },
      {
        name: 'Estudios Topográficos',
        description: 'Realizamos levantamientos topográficos precisos del terreno como insumo fundamental para el diseño y construcción de cualquier proyecto de infraestructura.'
      },
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
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div key={service.name}>
                      <h4 className="font-semibold text-foreground/90 flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                        {service.name}
                      </h4>
                      <p className="text-muted-foreground ml-8 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
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

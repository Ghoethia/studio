import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Map, ShieldCheck, Wind, Droplets, Unplug, Layers, Microscope, AirVent, Database } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Planificación Territorial',
    icon: <Map className="h-6 w-6 text-accent" />,
    description: 'Desarrollamos instrumentos de planificación para guiar el crecimiento y uso del suelo de manera sostenible, asegurando el cumplimiento normativo y la protección de los recursos.',
    services: [
      {
        name: 'Planes de Ordenamiento Territorial (POT)',
        details: 'Realizamos el diagnóstico y la formulación de planes maestros que definen la estructura y las directrices para el desarrollo urbano y rural a largo plazo.'
      },
      {
        name: 'Planes Parciales',
        details: 'Elaboramos instrumentos detallados para desarrollar áreas específicas del municipio, complementando y ejecutando las directrices del POT.'
      },
      {
        name: 'Correcciones y Análisis Cartográfico',
        details: 'Ofrecemos servicios de alta precisión en la creación, corrección y análisis de cartografía base y temática para todo tipo de proyectos territoriales.'
      }
    ]
  },
  {
    title: 'Gestión Ambiental',
    icon: <ShieldCheck className="h-6 w-6 text-accent" />,
    description: 'Ofrecemos un soporte integral para que las organizaciones cumplan con la legislación ambiental y mejoren su desempeño de manera proactiva y eficiente.',
    services: [
      {
        name: 'Auditorías y Consultoría Ambiental',
        details: 'Ejecutamos auditorías exhaustivas y ofrecemos consultoría experta, incluyendo outsourcing, para optimizar la gestión ambiental de su empresa.'
      },
      {
        name: 'Indicadores y Seguimiento',
        details: 'Diseñamos y realizamos el seguimiento a indicadores clave que permiten medir y reportar el desempeño ambiental de forma clara y objetiva.'
      },
      {
        name: 'Acompañamiento Técnico y Jurídico',
        details: 'Brindamos soporte especializado en procesos sancionatorios y en la implementación de medidas preventivas, asegurando el respaldo legal y técnico.'
      }
    ]
  },
  {
    title: 'Estudios Ambientales',
    icon: <Wind className="h-6 w-6 text-accent" />,
    description: 'Realizamos análisis técnicos y científicos para evaluar la viabilidad de proyectos y garantizar su armonía con el entorno natural y la normativa vigente.',
    services: [
      {
        name: 'Estudios de Impacto Ambiental (EIA)',
        details: 'Evaluamos los posibles impactos de un proyecto para definir medidas de manejo que aseguren su sostenibilidad y aprobación.'
      },
       {
        name: 'Diagnósticos Ambientales de Alternativas (DAA)',
        details: 'Analizamos diferentes opciones de un proyecto para seleccionar la alternativa que ofrezca los menores impactos ambientales y sociales.'
      },
      {
        name: 'Planes de Manejo Ambiental (PMA)',
        details: 'Diseñamos programas y estrategias específicas para prevenir, mitigar y compensar los impactos identificados en los estudios ambientales.'
      },
       {
        name: 'Estudios Hidrológicos e Hidráulicos',
        details: 'Analizamos el comportamiento del agua para proyectos que interactúan con cuerpos hídricos, garantizando una gestión sostenible del recurso.'
      },
      {
        name: 'Caracterización de Flora y Fauna',
        details: 'Realizamos inventarios y análisis de la biodiversidad para establecer líneas base y planes de conservación en áreas de influencia de proyectos.'
      },
      {
        name: 'Planes de Gestión del Riesgo (PGR)',
        details: 'Identificamos y evaluamos riesgos de origen natural o antrópico, formulando planes para su prevención y mitigación efectiva.'
      }
    ]
  },
  {
    title: 'Otros Servicios Especializados',
    icon: <Microscope className="h-6 w-6 text-accent" />,
    description: 'Ofrecemos soluciones técnicas avanzadas y análisis de datos geoespaciales para complementar sus proyectos con información precisa y detallada.',
    services: [
      {
        name: 'Mediciones de Calidad de Aire y Ruido',
        details: 'Realizamos monitoreos técnicos para medir los niveles de contaminantes en el aire y la presión sonora, garantizando el cumplimiento de los estándares normativos.'
      },
      {
        name: 'Geodatabase y Mapas Temáticos',
        details: 'Diseñamos y estructuramos bases de datos geoespaciales y creamos mapas personalizados que facilitan el análisis y la toma de decisiones territoriales.'
      },
      {
        name: 'Estudios Topográficos',
        details: 'Realizamos levantamientos topográficos de alta precisión, fundamentales para el diseño y construcción de cualquier proyecto de infraestructura.'
      }
    ]
  }
];

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
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {serviceCategories.map((category) => (
              <AccordionItem key={category.title} value={category.title} className="border-b-2 border-primary/10">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                       {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-headline font-semibold text-primary">{category.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pl-16">
                  <ul className="space-y-4">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <h4 className="font-semibold text-foreground">{service.name}</h4>
                        <p className="text-muted-foreground text-sm mt-1">{service.details}</p>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

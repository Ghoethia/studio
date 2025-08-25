import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const projects = [
  {
    title: 'Residencia Moderna',
    description: 'Diseño y construcción de una vivienda unifamiliar con acabados de lujo y eficiencia energética.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'modern house'
  },
  {
    title: 'Oficinas Corporativas',
    description: 'Remodelación integral de espacios de oficina para un ambiente de trabajo colaborativo y moderno.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'office interior'
  },
  {
    title: 'Complejo Comercial',
    description: 'Desarrollo de un nuevo centro comercial, incluyendo planificación, diseño y construcción.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'shopping mall'
  },
  {
    title: 'Jardín Paisajístico',
    description: 'Creación de un espacio verde urbano con diseño de paisaje sostenible y áreas recreativas.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'landscaped garden'
  },
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Proyectos Ejecutados</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Descubre una selección de nuestros trabajos más destacados, donde la calidad y la innovación son protagonistas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  width="600"
                  height="400"
                  alt={`Imagen de ${project.title}`}
                  className="object-cover w-full h-60"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="font-body">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

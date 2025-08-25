import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const projects = [
  {
    title: 'Residencia Moderna',
    description: 'Pintura exterior completa con acabados de alta durabilidad y protección UV.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'modern house exterior'
  },
  {
    title: 'Oficinas Corporativas',
    description: 'Renovación de interiores con paleta de colores corporativa y pintura de alta resistencia.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'modern office interior'
  },
  {
    title: 'Edificio Residencial',
    description: 'Impermeabilización y pintura de fachada para un edificio de apartamentos.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'apartment building'
  },
  {
    title: 'Local Comercial',
    description: 'Aplicación de pintura epóxica en pisos y renovación de fachada para tienda.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'store front'
  },
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Proyectos Destacados</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explora algunos de nuestros trabajos recientes y comprueba la calidad y el detalle que nos caracteriza.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-lg group">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  width="600"
                  height="400"
                  alt={`Imagen de ${project.title}`}
                  className="object-cover w-full h-64 transform transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6 bg-card">
                <CardTitle className="font-headline text-xl mb-2 text-primary">{project.title}</CardTitle>
                <CardDescription className="font-body text-muted-foreground">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

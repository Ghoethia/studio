import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Sobre Montecarlo</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En Montecarlo, nos dedicamos a transformar visiones en realidad. Con más de 20 años de experiencia en el sector, nuestro equipo de profesionales apasionados se compromete a entregar proyectos de la más alta calidad, superando las expectativas de nuestros clientes en cada paso del camino.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra misión es construir espacios que no solo sean funcionales y estéticos, sino también sostenibles y duraderos. Creemos en la importancia de la innovación, la integridad y la colaboración para crear valor y un impacto positivo en nuestras comunidades.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Equipo de Montecarlo"
              data-ai-hint="team planning"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

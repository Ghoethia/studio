import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Sobre Nosotros</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Somos una firma de consultoría ambiental con más de 10 años de experiencia, dedicada a ofrecer soluciones sostenibles e innovadoras. Nuestra pasión es balancear el desarrollo con la conservación del medio ambiente.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Nos comprometemos con la excelencia técnica y la satisfacción de nuestros clientes, utilizando metodologías de vanguardia y un equipo multidisciplinario para garantizar resultados precisos y confiables que impulsen un futuro más verde.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Equipo de Montecarlo en el campo"
              data-ai-hint="environmental scientists team"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

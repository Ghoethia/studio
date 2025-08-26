'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un email válido.'),
  phone: z.string().min(7, 'El teléfono debe tener al menos 7 dígitos.'),
  service: z.string(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    // Aquí se podría integrar un AI flow o una llamada a una API
    console.log(data);

    // Simulación de llamada a API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    toast({
      title: '¡Mensaje Enviado!',
      description: 'Gracias por contactarnos. Te responderemos a la brevedad.',
    });
    form.reset();
  };

  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Habla con un experto</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ¿Listo para empezar tu próximo proyecto ambiental? Completa el formulario y solicita tu cotización sin compromiso. Nuestro equipo está listo para brindarte la mejor solución.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="p-8 border-2 border-accent/20 rounded-xl">
            <CardContent className="p-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu número de teléfono" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cuéntanos sobre tu proyecto</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe brevemente qué necesitas..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full" disabled={isLoading}>
                    {isLoading ? 'Enviando...' : 'Solicitar Cotización'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="space-y-8">
             <h3 className="text-2xl font-bold font-headline text-primary">Información de Contacto</h3>
             <p className="text-muted-foreground">
                También puedes contactarnos directamente a través de estos canales. ¡Estamos listos para ayudarte!
             </p>
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                        <p className="font-semibold">Teléfono</p>
                        <a href="tel:+123456789" className="text-muted-foreground hover:text-accent">+1 (23) 456-7890</a>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:contacto@montecarlo.com" className="text-muted-foreground hover:text-accent">contacto@montecarlo.com</a>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                        <p className="font-semibold">Ubicación</p>
                        <p className="text-muted-foreground">Ciudad, País - Atendemos a nivel nacional.</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

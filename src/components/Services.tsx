import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import groomingImage from "@/assets/service-grooming.jpg";
import vetImage from "@/assets/service-vet.jpg";
import spaImage from "@/assets/service-spa.jpg";

const services = [
  {
    title: "Banho e Tosa",
    description: "Banho completo, tosa higiênica ou estética",
    price: "A partir de R$ 80",
    image: groomingImage,
  },
  {
    title: "Consulta Veterinária",
    description: "Check-up completo, vacinação e orientações de saúde",
    price: "A partir de R$ 150",
    image: vetImage,
  },
  {
    title: "Day Spa Pet",
    description: "Tratamento premium com massagem, hidratação e muito mais",
    price: "A partir de R$ 200",
    image: spaImage,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos uma gama completa de serviços para manter seu pet feliz e saudável
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-primary font-bold text-xl mb-4">{service.price}</p>
                <a href="#agendar">
                  <Button className="w-full">Agendar</Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

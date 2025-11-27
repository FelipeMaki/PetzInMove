import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import groomingImage from "@/assets/service-grooming.jpg";
import vetImage from "@/assets/service-vet.jpg";
import spaImage from "@/assets/service-spa.jpg";
import { SERVICOS_FIXOS } from "@/lib/servicos-fixos";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const Services = () => {
  const resolveImage = (service: { nome: string }, index: number) => {
    const normalized = service.nome.toLowerCase();
    if (normalized.includes("banho") || normalized.includes("tosa")) {
      return groomingImage;
    }
    if (normalized.includes("consulta") || normalized.includes("veter")) {
      return vetImage;
    }
    if (normalized.includes("spa")) {
      return spaImage;
    }
    if (normalized.includes("unha") || normalized.includes("cortar")) {
      return groomingImage;
    }
    const library = [groomingImage, vetImage, spaImage];
    return library[index % library.length];
  };

  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Servicos
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos uma gama completa de servicos para manter seu pet feliz e saudavel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICOS_FIXOS.map((service, index) => (
            <Card 
              key={service.id}
              className="overflow-hidden hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={resolveImage(service, index)} 
                  alt={service.nome}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.nome}</h3>
                <p className="text-muted-foreground mb-4">{service.descricao}</p>
                <p className="text-primary font-bold text-xl mb-4">
                  {formatter.format(Number(service.preco))}
                </p>
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

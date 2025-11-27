import { prisma } from "../prisma/prisma";
import { SERVICOS_FIXOS } from "../src/constants/servicos";

async function main() {
  console.log("Garantindo que os 4 servicos padrao existam...");

  for (const servico of SERVICOS_FIXOS) {
    const existing = await prisma.servico.findFirst({
      where: { title: servico.title },
    });

    if (existing) {
      await prisma.servico.update({
        where: { id: existing.id },
        data: {
          title: servico.title,
          description: servico.description,
          price: servico.price,
        },
      });
      console.log(`Servico atualizado: ${servico.title} (ID: ${existing.id})`);
    } else {
      const created = await prisma.servico.create({
        data: servico,
      });
      console.log(`Servico criado: ${servico.title} (ID: ${created.id})`);
    }
  }

  const allServicos = await prisma.servico.findMany({
    orderBy: { id: "asc" },
  });
  console.log(`\nTotal de servicos no banco: ${allServicos.length}`);
  console.log("Servicos disponiveis:");
  allServicos.forEach((s) => {
    console.log(`  - ${s.title} (ID: ${s.id}) - R$ ${s.price}`);
  });
  
  if (allServicos.length < 4) {
    console.log("\n⚠️  ATENCAO: Menos de 4 servicos encontrados. Execute novamente o script.");
  }
}

main()
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

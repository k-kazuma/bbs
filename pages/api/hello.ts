import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const post = await prisma.post.create({
    data: {
      title: "hello",
      content: "aaaaaaa",
    },
  });
  console.log(post);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  // ... you will write your Prisma Client queries here
  const kyle = await prisma.user.findFirst({
    where: {
      email: "kyle@test.com",
    },
  });
  if (kyle) {
    const post = await prisma.post.findFirst({
      where: {
        authorId: kyle.id,
      },
    });

    // post delete
    if (post) {
      await prisma.post.delete({
        where: {
          id: post.id,
        },
      });
    }

    // user delete
    await prisma.user.delete({
      where: {
        id: kyle.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

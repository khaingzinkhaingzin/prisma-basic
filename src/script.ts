import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.deleteMany();
  await prisma.userPreference.deleteMany();
  await prisma.post.deleteMany();
  const user = await prisma.user.createMany({
    data: [
      {
        name: "Kyle",
        email: "kyle@test.com",
        age: 27,
      },
      {
        name: "Sally",
        email: "sally@test.com",
        age: 29,
      },
    ],
  });
  const kyle = await prisma.user.findUnique({
    where: { email: "kyle@test.com" },
  });
  const sally = await prisma.user.findUnique({
    where: { email: "sally@test.com" },
  });

  if (kyle) {
    await prisma.post.create({
      data: {
        title: "Post 1",
        averateRating: 3.5,
        authorId: kyle.id,
      },
    });
  }
  if (sally) {
    await prisma.post.create({
      data: {
        title: "Post 2",
        averateRating: 3.7,
        authorId: sally.id,
      },
    });
  }

  console.log(user);
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

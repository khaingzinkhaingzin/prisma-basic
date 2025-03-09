import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.deleteMany();
  // await prisma.userPreference.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Kyle",
      email: "kyle@test.com",
      age: 27,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    // get relation info
    // include: {
    //   userPreference: true,
    // },
    select: {
      name: true,
      userPreference: {
        select: {
          emailUpdates: true,
        },
      },
    },
  });
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

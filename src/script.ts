import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  // ... you will write your Prisma Client queries here
  const user = await prisma.user.update({
    where: {
      email: "kyle@test.com",
    },
    data: {
      userPreference: {
        update: {
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

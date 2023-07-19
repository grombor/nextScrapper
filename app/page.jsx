import React from 'react';
import { PrismaClient } from '@prisma/client';

const HomePage = () => {
  const prisma = new PrismaClient();

  async function main() {
    const newScrap = await prisma.scrap.create({
      data: {
        name: 'Alice',
      },
    });

    const scraps = await prisma.user.findMany();
    console.log(scraps);
  }

  main();

  return <div>homePage</div>;
};

export default HomePage;
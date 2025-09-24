const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Hash passwords for demo users
  const hashedPassword = await bcrypt.hash('123456', 10);

  // Create demo users
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@mail.com' },
    update: {},
    create: {
      email: 'user1@mail.com',
      name: 'John Doe',
      password: hashedPassword,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user2@mail.com' },
    update: {},
    create: {
      email: 'user2@mail.com',
      name: 'Jane Smith',
      password: hashedPassword,
    },
  });

  console.log(`Created users: ${user1.name}, ${user2.name}`);

  // Create demo markers
  const markers = [
    {
      title: 'Bangkok Grand Palace',
      description: 'Historic royal palace in Bangkok, Thailand',
      lat: 13.75,
      lng: 100.4913,
      userId: user1.id,
    },
    {
      title: 'Wat Pho Temple',
      description: 'Famous temple with reclining Buddha statue',
      lat: 13.7465,
      lng: 100.4927,
      userId: user1.id,
    },
    {
      title: 'Chatuchak Weekend Market',
      description: 'Large weekend market in Bangkok',
      lat: 13.7998,
      lng: 100.5504,
      userId: user2.id,
    },
    {
      title: 'Wat Arun',
      description: 'Temple of Dawn on the Chao Phraya River',
      lat: 13.7436,
      lng: 100.4889,
      userId: user2.id,
    },
    {
      title: 'Jim Thompson House',
      description: 'Museum showcasing traditional Thai architecture',
      lat: 13.746,
      lng: 100.5307,
      userId: user1.id,
    },
  ];

  for (const markerData of markers) {
    const marker = await prisma.marker.create({
      data: markerData,
    });
    console.log(`Created marker: ${marker.title}`);
  }

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:');
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

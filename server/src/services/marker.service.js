import { prisma } from '../configs/prisma.config.js';

export const markerService = {
  getAllMarkers: async (userId, { search }) => {
    const whereClause = {
      userId,
    };
    if (search) {
      whereClause.OR = [
        {
          title: {
            contains: search,
          },
        },
        {
          description: {
            contains: search,
          },
        },
      ];
    }

    const markers = await prisma.marker.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { markers };
  },
};

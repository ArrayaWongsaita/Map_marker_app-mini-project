// src/modules/markers/marker.service.js

import { prisma } from '../../shared/config/prisma.config.js';
import {
  ForbiddenError,
  NotFoundError,
} from '../../shared/utils/error.util.js';

export const markerService = {
  deleteMarker: async (userId, markerId) => {
    const marker = await prisma.marker.findUnique({
      where: { id: markerId },
    });
    if (!marker) throw NotFoundError('Marker not found');

    if (marker.userId !== userId)
      throw ForbiddenError('You do not have permission to delete this marker');

    await prisma.marker.delete({
      where: { id: markerId },
    });

    return { message: 'Marker deleted successfully' };
  },

  updateMarker: async (userId, markerId, data) => {
    const marker = await prisma.marker.findUnique({
      where: { id: markerId },
    });
    if (!marker) throw NotFoundError('Marker not found');

    if (marker.userId !== data.userId)
      throw ForbiddenError('You do not have permission to update this marker');

    const newMarker = await prisma.marker.update({
      where: { id: markerId },
      data,
    });

    return newMarker;
  },
  createMarker: (userId, data) => {
    return prisma.marker.create({
      data: {
        ...data,
        userId,
      },
    });
  },

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

    return await prisma.marker.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { markers };
  },
};

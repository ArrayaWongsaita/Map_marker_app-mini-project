import { prisma } from '../configs/prisma.config.js';
import createHttpError from 'http-errors';

export const markerService = {
  getMarkerById: async (userId, markerId) => {
    const marker = await prisma.marker.findUnique({
      where: { id: markerId, userId },
    });

    if (!marker) throw new createHttpError.NotFound('Marker not found');

    return { marker };
  },

  deleteMarker: async (userId, markerId) => {
    const marker = await prisma.marker.findUnique({
      where: { id: markerId, userId },
    });

    if (!marker) throw new createHttpError.NotFound('Marker not found');

    await prisma.marker.delete({
      where: { id: markerId },
    });

    return {};
  },

  // updateMarker() {},
  updateMarker: async (userId, markerId, markerData) => {
    const marker = await prisma.marker.findUnique({
      where: { id: markerId, userId },
    });

    if (!marker) throw new createHttpError.NotFound('Marker not found');

    const updatedMarker = await prisma.marker.update({
      where: { id: markerId },
      data: markerData,
    });

    return { marker: updatedMarker };
  },

  createMarker: async (userId, markerData) => {
    const marker = await prisma.marker.create({
      data: {
        userId,
        ...markerData,
      },
    });

    return { marker };
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

    const markers = await prisma.marker.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { markers };
  },
};

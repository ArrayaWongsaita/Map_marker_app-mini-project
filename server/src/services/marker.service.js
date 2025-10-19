// services/marker.service.js

import { prisma } from '../configs/prisma.config.js';
import createHttpError from 'http-errors';

export const markerService = {
  // delete a marker
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
  // update a marker
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
  // create a new marker
  createMarker: async (userId, markerData) => {
    const marker = await prisma.marker.create({
      data: {
        ...markerData,
        userId,
      },
    });
    return { marker };
  },
  // Fetch all markers for a user with optional search
  getAllMarkers: async (userId, { search }) => {
    const where = {
      userId,
    };
    if (search) {
      where.OR = [
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
      where: where,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { markers };
  },
};

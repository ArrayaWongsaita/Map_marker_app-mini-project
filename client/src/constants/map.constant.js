// client/src/constants/map.constant.js

export const tileLayers = [
  {
    name: 'OpenStreetMap',
    checked: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'CartoDB Positron',
    checked: false,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  },
  {
    name: 'MemoMaps',
    checked: false,
    attribution:
      'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
  },
  {
    name: 'Esri Satellite',
    checked: false,
    attribution: 'Tiles &copy; Esri',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'Stamen Toner',
    checked: false,
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>',
    url: 'https://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
  },
];

export const mockMarkers = [
  {
    id: 'f38027c0-446b-4480-b3d2-017fa77bfeed',
    title: 'Wat Pho Temple',
    description: 'Famous temple with reclining Buddha statue',
    lat: 13.7465,
    lng: 100.4927,
    userId: '160ebfb3-ed12-41aa-936f-f3e83118fe71',
    createdAt: '2025-10-09T04:04:24.264Z',
    updatedAt: '2025-10-09T04:04:24.264Z',
  },
  {
    id: 'e15261b2-7bd1-4805-bc65-0554d9ccb032',
    title: 'Bangkok Grand Palace',
    description: 'Historic royal palace in Bangkok, Thailand',
    lat: 13.75,
    lng: 100.4913,
    userId: '160ebfb3-ed12-41aa-936f-f3e83118fe71',
    createdAt: '2025-10-09T04:04:24.262Z',
    updatedAt: '2025-10-09T04:04:24.262Z',
  },
  {
    id: 'eae31910-df57-440a-8844-7c7329bb442b',
    title: 'Jim Thompson House',
    description: 'Museum showcasing traditional Thai architecture',
    lat: 13.746,
    lng: 100.5307,
    userId: '160ebfb3-ed12-41aa-936f-f3e83118fe71',
    createdAt: '2025-09-24T05:28:32.699Z',
    updatedAt: '2025-09-24T05:28:32.699Z',
  },
  {
    id: 'aa651c24-c8e1-4e4e-a34b-498d5ae957d0',
    title: 'Wat Pho Temple',
    description: 'Famous temple with reclining Buddha statue',
    lat: 13.7465,
    lng: 100.4927,
    userId: '160ebfb3-ed12-41aa-936f-f3e83118fe71',
    createdAt: '2025-09-24T05:28:32.696Z',
    updatedAt: '2025-09-24T05:28:32.696Z',
  },
  {
    id: '477edff5-7ed9-4886-9e3a-d30d4299d695',
    title: 'Bangkok Grand Palace',
    description: 'Historic royal palace in Bangkok, Thailand',
    lat: 13.75,
    lng: 100.4913,
    userId: '160ebfb3-ed12-41aa-936f-f3e83118fe71',
    createdAt: '2025-09-24T05:28:32.694Z',
    updatedAt: '2025-09-24T05:28:32.694Z',
  },
];

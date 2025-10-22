// client/src/constants/router.constant.js
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  MARKERS: '/markers',
  CREATE_MARKER: '/markers/create',
  UPDATE_MARKER_PATH: '/markers/update/:id',
  UPDATE_MARKER: (id) => `/markers/update/${id}`,
};

export const NavigationItems = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Markers', path: ROUTES.MARKERS },
];

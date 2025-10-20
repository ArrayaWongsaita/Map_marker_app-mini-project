// client/src/constants/router.constant.js

export const ROUTES = {
  HOME: '/',
  // auth
  LOGIN: '/login',
  REGISTER: '/register',

  // marker
  MARKERS: '/markers',
  CREATE_MARKER: '/markers/create',
  UPDATE_MARKER_PATH: `/marker/update/:id`,
  UPDATE_MARKER: (id) => `/marker/update/${id}`,
};

export const NavigationItems = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Markers', path: ROUTES.MARKERS },
];

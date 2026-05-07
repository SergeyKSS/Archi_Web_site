export const NavItems = [
  'Home', 'Project', 'Login', 'Contacts'
] as const;

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Projects: '/favorites',
  Contacts: '/contacts',
  NotFound: '/not-found',
} as const;
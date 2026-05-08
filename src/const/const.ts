export const AppRoute = {
  Root: '/',
  Project: '/project',
  Login: '/login',
  Contacts: '/contacts',
  NotFound: '/not-found',
} as const;

export const NavItems = [
  {label: 'Home', to: AppRoute.Root},
  {label: 'Project', to: AppRoute.Project},
  {label: 'Login', to: AppRoute.Login},
  {label: 'Contacts', to: AppRoute.Contacts},
] as const;

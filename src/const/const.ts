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

export const socialsData = [
  {name: 'Facebook', modifier: 'social__link_facebook', href: "facebook.com"},
  {name: 'Twitter', modifier: 'social__link_twitter', href: "twitter.com"},
  {name: 'Instagram', modifier: 'social__link_instagram', href: "instagram.com"},
] as const;

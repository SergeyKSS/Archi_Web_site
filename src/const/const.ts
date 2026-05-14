export const AppRoute = {
  Root: "/",
  Project: "/project",
  Login: "/login",
  Contacts: "/contacts",
  NotFound: "/not-found",
} as const;

export const APIRoute = {
  Offers: '/offers',
  Login: '/login',
  Logout: '/logout',
}

export const NavItems = [
  { label: "Home", to: AppRoute.Root },
  { label: "Project", to: AppRoute.Project },
  { label: "Contacts", to: AppRoute.Contacts },
] as const;

export const socialsData = [
  { 
    name: "Facebook", 
    modifier: "social__link_facebook", 
    href: "facebook.com" 
  },
  { 
    name: "Twitter", 
    modifier: "social__link_twitter", 
    href: "twitter.com" 
  },
  {
    name: "Instagram",
    modifier: "social__link_instagram",
    href: "instagram.com",
  },
] as const;

export const articleTexts = [
  "7 Tips for kids friendly interior design",
  "Smart tips for changing a room",
  "Eco-friendly design",
];

export const services = [
  {
    header: "Planning",
    paragraph: "Our services line one service line two",
    modifier: "services__icon_first",
    id: "01",
  },
  {
    header: "Interior",
    paragraph: "Our services line two service line two",
    modifier: "services__icon_second",
    id: "02",
  },
  {
    header: "Exterior",
    paragraph: "Our services line three service line two",
    modifier: "services__icon_third",
    id: "03",
  },
] as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

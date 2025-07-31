import App from '../App';
import { createRootRoute } from "@tanstack/react-router";
import { authRoute } from './authRoute';
import { homepageRoute } from './homepage';
import { dashboardRoute } from './dashboard';

export const rootRoute = createRootRoute({
  component: App
})

export const routeTree = rootRoute.addChildren([
  authRoute,
  homepageRoute,
  dashboardRoute
]);

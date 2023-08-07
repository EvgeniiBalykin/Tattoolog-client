import { HomePage } from "pages/HomePage/HomePage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { SingInPage } from "pages/Registation/SignInPage";
import { IRoutes } from "types/iroutes";
import { HeaderRoutesList } from "./enums";

export const HEADER_ROUTES: IRoutes[] = [
  { name: "Home", path: HeaderRoutesList.HOME, element: <HomePage /> },
];

export const LOGIN_ROUTES: IRoutes[] = [
  { name: "Login", path: HeaderRoutesList.LOGIN, element: <LoginPage /> },
  { name: "Sign In", path: HeaderRoutesList.SIGNIN, element: <SingInPage /> },
];

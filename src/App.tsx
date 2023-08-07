import { NavPanel } from "components/NavPanel/NavPanel";
import { Route, Routes } from "react-router";
import { HEADER_ROUTES, LOGIN_ROUTES } from "routes/HeaderRoutes";

export const App = () => {
  return (
    <>
      <NavPanel />
      <Routes>
        {HEADER_ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {LOGIN_ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

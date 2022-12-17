import { useRoutes } from "react-router-dom";
import Welcome from "./../components/Welcome";
import { React } from "react";
import Transactions from "./../components/Transactions";

export const rootRouter = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/Welcome",
    element: <Welcome />,
  },
  {
    path: "/Transactions",
    element: <Transactions />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;

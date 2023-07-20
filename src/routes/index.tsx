import { RouteObject } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import { Clientes, Juego, Principal } from "../views";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        id: "Principal",
        element: <Principal />,
      },
      {
        path: "clientes",
        id: "Clientes",
        element: <Clientes />,
      },
      {
        path: "juego",
        id: "Juego",
        element: <Juego />,
      },
    ],
  },
];

export default routes;

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "../../../shared/login/login";
import Dashboard from "../../domain/admin/dashboard/admin-dashboard";
import Overview from "../../domain/admin/dashboard/admin-overview";
import Coordinator from "../../domain/admin/user-management/user-coordinator";
import Student from "../../domain/admin/user-management/user-student";
import Program from "../../domain/admin/program/admin-program";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "coordinator",
        element: <Coordinator />,
      },
      {
        path: "students",
        element: <Student />,
      },
      {
        path: "program",
        element: <Program />,
      },
    ],
  },
]);

export function AppRoute() {
  return <RouterProvider router={router} />;
}

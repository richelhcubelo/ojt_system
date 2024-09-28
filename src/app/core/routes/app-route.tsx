import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "../../../shared/login/login";
import Dashboard from "../../domain/admin/dashboard/admin-dashboard";
import Overview from "../../domain/admin/dashboard/admin-overview";
import Coordinator from "../../domain/admin/user-management/user-coordinator";
import Student from "../../domain/admin/user-management/user-student";
import Program from "../../domain/admin/program/admin-program";
import CDashboard from "../../domain/coordinator/dashboard/coordinator-1dashb";
import CoordinatorDashboard from "../../domain/coordinator/dashboard/coordinator-dashboard";
import Attendance from "../../domain/coordinator/attendance/cd-attendance";
import CoordinatorStudent from "../../domain/coordinator/students/cd-student";

export function AppRoute() {
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

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
    {
      path: "/cddashboard",
      element: <CDashboard />,
      children: [
        {
          path: "coordinator-dashboard",
          element: <CoordinatorDashboard />,
        },
        {
          path: "attendance",
          element: <Attendance />,
        },
        {
          path: "coordinator-students",
          element: <CoordinatorStudent />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./protected/ProtectedRoute";
// import Login from "../views/adminform/Login.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Dashboard = lazy(() => import("../views/Dashboard.js"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Login = lazy(() => import("../views/adminform/Login"));
const ManageAccount = lazy(() =>
  import("../views/manage-account/Manage_account")
);

const ManageClients = lazy(() =>
  import("../views/manage-clients/ManageClients")
);

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <FullLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/orders", exact: true, element: <Tables /> },
      { path: "/add", exact: true, element: <Forms /> },
      { path: "/manage", exact: true, element: <ManageAccount /> },
      { path: "/manage-client", exact: true, element: <ManageClients /> },
    ],
  },
  { path: "/login", element: <Login /> },
];

export default ThemeRoutes;

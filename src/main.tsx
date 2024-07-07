import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { UserContextProvider } from "./context/UserContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
      {
        path: "dashboard/*",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  // </React.StrictMode>
);

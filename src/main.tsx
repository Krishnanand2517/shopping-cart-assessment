import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider.tsx";
import "./index.css";
import AuthRedirect from "./components/AuthRedirect.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import App from "./App.tsx";
import HomeScreen from "./screens/HomeScreen.tsx";
import AuthScreen from "./screens/AuthScreen.tsx";
import CartScreen from "./screens/CartScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <AuthRedirect />,
        children: [{ path: "/auth", element: <AuthScreen /> }],
      },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/", element: <HomeScreen /> },
          { path: "/cart", element: <CartScreen /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

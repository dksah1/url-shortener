import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Link from "./pages/link";
import RedirectLink from "./pages/redirect-link";
import LandingPage from "./pages/landing";
import UrlProvider from "./context";
import RequireAuth from "./components/require-auth";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <Link />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);
function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // generate token
      const token = await getToken(messaging, {
        vapidKey:
          "BNa81ggeblFgmFW9YUmVUHnyQC7DJUVWsCgnRMY8345e6M0ky1H66KV5ii9cnb1Go_dymXP6Q46arJQcPne5ysY",
      });
      console.log("token", token);
    } else if (permission === "denied") {
      alert("you denied for the notification ");
    }
  }
  useEffect(() => {
    // request user fornotofication
    requestPermission();
  }, []);
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;

import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import Root from "../components/Root/Root";
import About from "../components/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,   // ✅ element use korte hobe
    children: [
      {
        index: true,
        Component: Home
      },
     {
      path: '/about',
      Component: About
     }
    ],
  },
]);

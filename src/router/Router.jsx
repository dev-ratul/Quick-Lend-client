import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import UserInformation from "../pages/Home/UserInformation/UserInformation";
import Root from "../components/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,   // ✅ element use korte hobe
    children: [
      {
        index: true,
        Component: Home
      },
     
    ],
  },
]);

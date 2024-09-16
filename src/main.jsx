import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../Screens/Home"));
const Jobs = lazy(() => import("../Screens/Jobs"));

import JobSearchSection from "../Components/JobSearchSection";
import JobOrExpert from "../Components/JobOrExpert";
import Categories from "../Screens/Categories";
import JobDetailsScreen from "../Screens/JobDetailsScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Home />
            <JobSearchSection />
            <Categories />
            <Jobs />
            <JobOrExpert />
          </Suspense>
        ),
      },
      {
        path: "details",
        element: <h1>Details</h1>,
      },
      {
        path: "browsejobs",
        element: <h1>Browsejobs</h1>,
      },
      {
        path: "contacts",
        element: <h1>Contacts</h1>,
      },
      {
        path: "jobdetailsscreen",
        element: <JobDetailsScreen/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

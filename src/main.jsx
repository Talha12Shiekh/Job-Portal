import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../Screens/Home"));
const Jobs = lazy(() => import("../Screens/Jobs"));
const Contacts = lazy(() => import("../Screens/Contacts.jsx"));

import JobSearchSection from "../Components/JobSearchSection";
import JobOrExpert from "../Components/JobOrExpert";
import Categories from "../Screens/Categories";
import JobDetailsScreen from "../Screens/JobDetailsScreen.jsx";
import BrowseJobsScreen from "../Screens/BrowseJobsScreen.jsx";
import JobsSearchandViewSection from "../Components/JobsSearchandViewSection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <JobsSearchandViewSection/>
            <Categories />
            <JobOrExpert />
          </>
        ),
      },
      {
        path: "details",
        element: <h1>Details</h1>,
      },
      {
        path: "browsejobs",
        element: <BrowseJobsScreen />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "jobdetailsscreen",
        element: <JobDetailsScreen />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

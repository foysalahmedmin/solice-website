// Layouts
import CommonLayout from "@/components/layouts/CommonLayout";
import RootLayout from "@/components/layouts/RootLayout";
import AboutPage from "@/pages/(common)/AboutPage";
import ExperiencePage from "@/pages/(common)/ExperiencePage";
import HomePage from "@/pages/(common)/HomePage";
import LocationPage from "@/pages/(common)/LocationPage";
import ServicePage from "@/pages/(common)/ServicePage";

// Partials Pages
import ErrorPage from "@/pages/(partials)/ErrorPage";

// Common Pages

export const routes = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <CommonLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/services",
            element: <ServicePage />,
          },
          {
            path: "/location",
            element: <LocationPage />,
          },
          {
            path: "/experience",
            element: <ExperiencePage />,
          },
        ],
      },
    ],
  },
];

// Layouts
import CommonLayout from "@/components/layouts/CommonLayout";
import RootLayout from "@/components/layouts/RootLayout";
import AboutPage from "@/pages/(common)/AboutPage";
import ContactPage from "@/pages/(common)/ContactPage";
import ExperiencePage from "@/pages/(common)/ExperiencePage";
import HomePage from "@/pages/(common)/HomePage";
import IndividualFamilyPage from "@/pages/(common)/IndividualFamilyPage";
import LocationPage from "@/pages/(common)/LocationPage";
import LongevityPage from "@/pages/(common)/LongevityPage";
import PrivacyPolicyPage from "@/pages/(common)/PrivacyPolicyPage";
import SeasonalPage from "@/pages/(common)/SeasonalPage";
import ServicePage from "@/pages/(common)/ServicePage";
import TermsPage from "@/pages/(common)/TermsPage";
import TreatmentPage from "@/pages/(common)/TreatmentPage";
import TreatmentDetailPage from "@/pages/(common)/TreatmentPage/[treatment]";

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
            path: "/contact-us",
            element: <ContactPage />,
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
            path: "/treatments",
            element: <TreatmentPage />,
          },
          {
            path: "/treatments/:treatment",
            element: <TreatmentDetailPage />,
          },
          {
            path: "/locations",
            element: <LocationPage />,
          },
          {
            path: "/experiences",
            element: <ExperiencePage />,
          },
          // {
          //   path: "/team",
          //   element: <TeamPage />,
          // },
          {
            path: "/individual-family-gp",
            element: <IndividualFamilyPage />,
          },
          {
            path: "/longevity",
            element: <LongevityPage />,
          },
          {
            path: "/seasonal",
            element: <SeasonalPage />,
          },
          {
            path: "/terms",
            element: <TermsPage />,
          },
          {
            path: "/privacy-policy",
            element: <PrivacyPolicyPage />,
          },
        ],
      },
    ],
  },
];

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./ErrorElement/ErrorElement";
import PageLayout from "@/layouts/PageLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ShopPage from "@/pages/ShopPage";
import FAQPage from "@/pages/FAQPage";

export default function AppRouter() {
  const ErrorDisplay = () => {
    return (
      <PageLayout>
        <ErrorElement />
      </PageLayout>
    );
  };

  // ================= ROUTES ======================= //
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "shop", element: <ShopPage /> },
        { path: "faqs", element: <FAQPage /> },
      ],

      errorElement: <ErrorDisplay />,
    },
  ]);

  return <RouterProvider router={router} />;
}

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ContactsPage from "../pages/ContactsPage";
import NotFound from "../pages/NotFound";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="kontaktai" element={<ContactsPage />} />

      {/* Sitas turi buti paskutinis */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const routerLinks = [
  { title: "Pradžia", href: "/" },
  { title: "Kontaktai", href: "/kontaktai" },
];

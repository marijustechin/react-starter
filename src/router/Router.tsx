import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="kontaktai" element={<ContactsPage />} />
    </Route>
  )
);

export const routerLinks = [
  { title: 'Pradžia', href: '/' },
  { title: 'Kontaktai', href: '/kontaktai' },
];

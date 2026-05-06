import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./Pages/About/About";
import ExploreCars from "./Pages/ExploreCars/ExploreCars";
import HelpCentre from "./Pages/HelpCentre/HelpCentre";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Auth/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/ExploreCars" element={<ExploreCars />} />
      <Route path="/HelpCentre" element={<HelpCentre />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

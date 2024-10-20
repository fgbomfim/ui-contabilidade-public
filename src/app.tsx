import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';
import Services from './pages/services';
import NotFound from './pages/not-found';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import all pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {/* Header will always be visible */}
      <Header />

      {/* Main content that changes based on the route */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer will always be visible */}
      <Footer />
    </Router>
  );
};

export default App

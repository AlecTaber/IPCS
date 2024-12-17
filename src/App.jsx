// import React from 'react'
import Header from "./components/Header";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer";
import Page from "./components/page.jsx";
import { useLocation } from "react-router-dom";


function App() {
  const openPage = useLocation().pathname;


  return (
    <div>
      <Header>
        <Nav openPage={openPage} />
      </Header>
      <main>
        <Page openPage={openPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App

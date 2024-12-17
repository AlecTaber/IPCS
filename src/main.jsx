import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/ErrorPage.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Resources from './pages/Resources.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Services from './pages/Services.jsx';
import Training from './pages/Training.jsx';

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
      {
        path: 'testimonials',
        element: <Testimonials />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'training',
        element: <Training />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

//  createRoot(document.getElementById('root')).render(
//    <StrictMode>
//      <App />
//    </StrictMode>,
//  )

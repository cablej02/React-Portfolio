import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//TODO - cleanup css imports to only what's needed
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import './App.css'

import App from './App.jsx'
import Error from './pages/error.jsx'
import About from './pages/about.jsx'
import Portfolio from './pages/portfolio.jsx';
import Resume from './pages/resume.jsx';
import Contact from './pages/contact.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        //TODO - should about be default route?
        {
          index: true,
          element: <About />,
        },
        // {
        //   path: '/About',
        //   element: <About />,
        // },
        {
          path: '/Portfolio',
          element: <Portfolio />,
        },
        {
          path: '/Resume',
          element: <Resume />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );

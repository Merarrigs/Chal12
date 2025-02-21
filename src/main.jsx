import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// Bringing in the pages the router will use to conditionally show the appropriate views

import AboutMe from './pages/AboutMe';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import App from './App';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {       
      path: 'profile',
      element: <Profile />,
      },
      { 
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

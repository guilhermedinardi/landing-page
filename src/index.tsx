import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './routes';
import Obrigado from './routes/obrigado';

const router = createBrowserRouter([
  {
    path: '/tipo-um-banco',
    element: <LandingPage />,
  }, 
  {
    path: '/obrigado',
    element: <Obrigado />,
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


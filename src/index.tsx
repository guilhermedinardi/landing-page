import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './routes';
import Obrigado from './routes/obrigado';

console.log('Webpack Zero Config Works!');

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
  <Suspense fallback={ <div>Carregando...</div> }>
    <RouterProvider router={router} />
  </Suspense>
);

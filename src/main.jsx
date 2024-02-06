import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Products from './components/RQ1/Products.jsx';
import Product from './components/RQ1/Product.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/:productId',
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

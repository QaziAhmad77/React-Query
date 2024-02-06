import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Products from './components/RQ1/Products.jsx';
import Product from './components/RQ1/Product.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Paginated from './components/RQ2/paginated.jsx';
import Parallel from './components/RQ2/Parallel.jsx';
import Optimistic from './components/RQ2/Optimistic.jsx';
import Dependant from './components/RQ2/Dependent.jsx';

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

  {
    path: 'paginated',
    element: <Paginated />,
  },
  {
    path: 'parallel',
    element: <Parallel />,
  },
  {
    path: 'optimistic',
    element: <Optimistic />,
  },
  {
    path: 'dependant',
    element: <Dependant />,
  },
]);

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 10000,
//     },
//   },
// });
export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
import { createHashRouter } from 'react-router-dom';
import EcommerceLayout from './layout/EcommerceLayout';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <EcommerceLayout />,
    children: [
      {
        index: true,
        element: <CatalogPage />,
      },
      {
        path: 'producto/:id',
        element: <ProductDetailPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
    ],
  },
]);

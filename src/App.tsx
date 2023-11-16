import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from './providers';
import { Login, Register, Protected } from './pages';
import { Layout } from './layouts';
import Collection from './pages/collection/page';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Provider />,
    errorElement: <Provider />, // force enforcement of authprovider
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Protected />,
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/collection',
        element: <Collection />,
      },
    ],
  },
]);

export default Router;

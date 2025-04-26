import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ErrorElement from './pages/ErrorElement';
import About from './pages/About';
import { UserProvider } from './context/contextAPI';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App is now your layout or wrapper
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)

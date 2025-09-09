import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.tsx';
import Error from './routes/Error/index.tsx';
import Faq from './routes/Faq/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import Hospitais from './routes/Hospitais/index.tsx';
import Entrar from './routes/Entrar/index.tsx';
import Servicos from './routes/Servicos/index.tsx';

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/servicos", element: <Servicos/>},
    {path:"/hospitais", element: <Hospitais/>},
    {path:"/integrantes", element: <Integrantes/>},
    {path:"/faq", element: <Faq/>},
    {path:"/contato", element: <Contato/>},
    {path:"/entrar", element: <Entrar/>},
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

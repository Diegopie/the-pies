import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/Home/Home.tsx';
import './index.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<App />}>
      <Route index element={<Home />}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Cocktail from "./pages/Cocktail";
import Favorite from "./pages/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/popular",
    element: <Popular/>
  },
  {
    path: "/cocktail",
    element: <Cocktail/>
  },
  {
    path: "/favorite",
    element: <Favorite/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;

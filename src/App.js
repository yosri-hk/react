import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Products from './Products';
import { Route, Routes } from 'react-router-dom';
import Test from "./Components/Test";
import React from "react";
import NavigationBar from "./Components/NavigationBar";
import NotFound from "./Components/NotFound";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <div className="App">
      
      <>
    <React.Suspense fallback={<h1> Loading</h1>} >
      <NavigationBar />
      <Routes>
        <Route path="/home">
          <Route index element={<Products />} />
          <Route path=":name" element={<ProductDetails />}></Route>
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/test/:username" element={<Test />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </React.Suspense>
      </>

    </div>
  );
}

export default App;

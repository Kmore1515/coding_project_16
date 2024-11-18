import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';
import AddProductForm from './components/AddProductForm';

function App() {
  return (
     <>
     <ProductList />
     <ProductItem />
     <AddProductForm />
    </>
  );
}

export default App

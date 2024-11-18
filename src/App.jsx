import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList.jsx';
import ProductItem from './components/ProductItem.jsx';
import AddProductForm from './components/AddProductForm.jsx';

function App() {   
  const [products, setProducts] =useState([]);
  const addProduct = (newProduct) => {
    setProducts((oldProducts) => [...oldProducts, newProduct]); 
  };
  return (
     <> 
     <ProductList />
     <ProductItem />
     <AddProductForm onAddProduct={addProduct}/>
    </>
  );
}

export default App

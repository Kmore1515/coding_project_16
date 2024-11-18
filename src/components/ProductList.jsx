import React from 'react';
import ProductItem from './ProductItem';
// Task 1 & 2
// define a default list of products as an array of objects with id, name, price, and description fields.
const products = [
    { id: 1, name: "Macbook", price: 1200, description: "Our Most Powerful Laptop Ever!"},
    { id: 2, name: "Iphone", price: 1000, description: "A Phone So Smart, You Wont Believe It!"},
    { id: 3, name: "Airpods", price: 150, description: "A New Generation of Noise Eliminating Headphones."},
];


function ProductList() {
    return (
        <>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <ProductItem
                        key={product.id} 
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </>
    );
}
export default ProductList; 
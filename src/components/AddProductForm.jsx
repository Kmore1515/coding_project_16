import React, { useState } from 'react';
import ProductItem from './ProductItem.jsx';
import ProductList from './ProductList.jsx';

function AddProductForm({onAddProduct}) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Product ${name} added!`);
        onAddProduct({ name, price, description});
        setName('');
        setPrice('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </label> 
            <br/>
            <label>
                Price:
                <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}/>
            </label>
            <br/>
            <label>
                Description:
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/>
            </label>
            <br/>
            <button type="submit">Add Product</button>

        </form>
    )


}
export default AddProductForm
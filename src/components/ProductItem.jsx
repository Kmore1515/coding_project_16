import React from 'react';
// Create the ProductItem Component
function ProductItem({name, price, description}) {
    return (
        <div className="product-item">
        <h3><u>{name}</u></h3>
        <p>{description}</p>
        <p>${price}</p>
        </div>
    );
} 
 
export default ProductItem;
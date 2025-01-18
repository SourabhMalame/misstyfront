import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import { getProductbyid } from '../../api/product'; // Ensure this function correctly fetches a single product

const SingleProduct = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState({}); // Use null for a single product

    const findProduct = async () => {
        try {
            const response = await getProductbyid(id); // Call the API to fetch product by id
            console.log(response)
            if (response) {
                setProduct(response); // Directly set the product data
            } else {
                console.log("Product not found");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        findProduct();
    }, [id]); // Make sure to include `id` as a dependency so it refetches if the id changes

    if (!product) {
        return <div>Loading...</div>; // Handle loading state
    }

    return (
        <div className="single-product">
            <img src={product.imageUrl} alt={product.name} className="single-product-image" />
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description || "This is a detailed description of the product."}</p>
            <button className="buy-now-button">Buy Now</button>
        </div>
    );
};

export default SingleProduct;

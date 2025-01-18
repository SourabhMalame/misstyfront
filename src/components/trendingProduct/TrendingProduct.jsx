import React from "react";
import "./TrendingProduct.css";

const TrendingProduct = () => {
    const products = [
        {
            id: 1,
            image: "https://via.placeholder.com/150",
            title: "Product 1",
            price: "$25.00",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Product 2",
            price: "$30.00",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/150",
            title: "Product 3",
            price: "$20.00",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/150",
            title: "Product 4",
            price: "$35.00",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/150",
            title: "Product 5",
            price: "$40.00",
        },
    ];

    return (
        <div className="trending-product">
            <h2 className="trending-title">Trending Products</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingProduct;

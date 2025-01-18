import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../api/product';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]); // Fixed typo (setProduct to setProducts)
    const [loading, setLoading] = useState(true); // To handle loading state
    const [error, setError] = useState(null); // For error handling

    const getAllProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
            setLoading(false); // Stop loading when data is fetched
        } catch (err) {
            console.error('Failed to fetch products:', err);
            setError('Failed to load products');
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    // Use navigate hook for navigation
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        // Navigate to the new URL with the product id
        navigate(`/product/${id}`);
    };

    // Handle loading and error states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div
                        className="product-list__card"
                        key={index}
                        onClick={() => handleProductClick(product._id)}

                    >
                        {console.log(product)}
                        <img
                            src={product.imageUrl || '/placeholder.jpg'}
                            alt={product.name}
                            className="product-list__image"
                        />
                        <h3 className="product-list__name">{product.name}</h3>
                        <p className="product-list__price">
                            {product.price ? `$${product.price}` : 'Price not available'}
                        </p>
                        <button className="product-list__buy-button">Buy Now</button>
                    </div>
                ))
            ) : (
                <div>No products available</div>
            )}
        </div>
    );
};

export default ProductList;

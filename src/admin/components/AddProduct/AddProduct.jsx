import React, { useState } from "react";

import "./AddProduct.css";

import { addProduct } from "../../../api/product";

const AddProduct = () => {

    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addProduct(product)
        console.log(result)
        alert("Product added successfully!");

    };

    return (
        <div className="add-product-container">
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit} className="add-product-form">
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Enter product description"
                        required
                    ></textarea>
                </div>

                <div className="form-group">

                    <label htmlFor="category">Category</label>

                    <select
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home-appliances">Home Appliances</option>
                        <option value="books">Books</option>

                    </select>

                </div>

                <div className="form-group">
                    <label htmlFor="image">Product Image</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;










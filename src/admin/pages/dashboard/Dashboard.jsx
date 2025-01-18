import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../../api/product';
import "./Dashboard.css"
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const [products, setProducts] = useState([]);

  const [orders, setOrders] = useState(0);

  const showProduct = async () => {
    try {
      const response = await getProducts();

      console.log(response);

      setProducts(response);

      setOrders(120);

    } catch (error) {

      console.error("Error fetching data:", error);

    }
  };

  const deleteProductFromDb = async (id) => {
    try {
      const res = await deleteProduct(id)
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {

    showProduct();

  }, []);

  return (
    <div className="dashboard-container">
      <div className="product-table">
        <div className="heading-dash">
          <h2>Product List</h2>
          <Link className='addproduct' to="/addproduct">Add Product</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td><Link className='link'>Update</Link>
                  <Link className='link' onClick={() => deleteProductFromDb(item._id)}>Delete</Link></td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Section: Additional Stats */}
      <div className="dashboard-stats">
        <h2>Statistics</h2>
        <div className="stat-box">
          <h3>Number of Orders</h3>
          <p>{orders}</p>
        </div>
        {/* Add more stats as needed */}
        <div className="stat-box">
          <h3>Revenue</h3>
          <p>$45,000</p> {/* Example static value */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

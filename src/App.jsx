import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import React, { useRef } from 'react';

import Navbar from './components/navbar/Navbar';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from './pages/contact/Contact';
import AdminLogin from './admin/pages/adminlogin/AdminLogin';
import UserLogin from './pages/user/login/UserLogin';
import Footer from './components/footer/Footer';
import AddProduct from './admin/components/AddProduct/AddProduct';
import './index.css';
import Signup from './pages/user/signup/Signup';

import ProductList from './components/productList/ProductList';
import SingleProduct from './subComponent/singleProduct/SingleProduct';
import Dashboard from './admin/pages/dashboard/Dashboard';

function App() {

  const location = useLocation();

  const nodeRef = useRef(null); // Create a ref for the transitioning element

  return (
    <>
      <Navbar />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef} // Pass the ref here
          timeout={300}
          classNames="fade"
        >
          <div ref={nodeRef}> {/* Add the ref here */}
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/user" element={<UserLogin />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path='/product' element={<ProductList />} />
              <Route path='/product/:id' element={<SingleProduct />} />
              <Route path='/admindashboard' element={<Dashboard />} />
            </Routes>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </>
  );
}

export default App;

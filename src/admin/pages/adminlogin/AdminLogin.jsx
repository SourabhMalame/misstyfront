import React, { useState } from 'react';

import "./AdminLogin.css";

import { adminLogin } from '../../../api/admin.js';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [adminData, setAdminData] = useState({

        username: "",

        password: "",

    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const readAdminData = (e) => {

        const { name, value } = e.target;

        setAdminData({ ...adminData, [name]: value });

    };

    const Navigate = useNavigate()

    const adminLog = async () => {

        try {
            const response = await adminLogin(adminData);
            console.log(response);
            console.log("Login Successfull")

            window.alert("Login Successfull")

            Navigate("/admindashboard")

        } catch (error) {

            setError("Login failed. Please try again.");
            console.error("Login error:", error);

        }

    };

    return (
        <div className="adminlogin">
            <div className="form">
                <h1 className="admin-login-h1">Admin Login</h1>
                <div className="admin-input">
                    <input
                        onChange={readAdminData}
                        className="admin-input-inp"
                        type="text"
                        placeholder='Username'
                        name='username'
                        id='adminusername'
                    />
                    <input
                        onChange={readAdminData}
                        className="admin-input-inp"
                        type="password"
                        placeholder='Password'
                        name="password"
                        id="adminpassword"
                    />
                    {/* <input
                        onChange={readAdminData}
                        className="admin-input-inp"
                        type="password"
                        placeholder='AdminKey'
                        name="adminkey"
                        id="adminkey"
                    /> */}
                </div>

                {error && <p className="error-message">{error}</p>}

                <button
                    className="admin-login-btn"
                    onClick={adminLog}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;

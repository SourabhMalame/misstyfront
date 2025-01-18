import React, { useState } from 'react'
import "./UserLogin.css"

const UserLogin = () => {
    const [UserData, setUserData] = useState({
        "Userusername": "",
        "Userpassword": "",

    })
    console.log(UserData)

    const readUserData = (e) => {
        const { name, value } = e.target;
        setUserData({ ...UserData, [name]: value })
    }
    
    return (
        <>
            <div className="Userlogin">

                <div className="from">

                    <h1 className="User-login-h1">User Login</h1>

                    <div className="User-input">

                        <input onChange={readUserData} className="User-input-inp" type="text" placeholder='username' name='Userusername' id='Userusername' />

                        <input onChange={readUserData} className="User-input-inp" type="password" placeholder='password' name="Userpassword" id="Userpassword" />

                    </div>

                    <button className="User-login-btn">Login</button>

                </div>
            </div>
        </>
    )
}

export default UserLogin
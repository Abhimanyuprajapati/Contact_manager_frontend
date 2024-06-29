import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3030/api/createusers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Credentials")
        } else {
            toast.success('User Successfully Register');
            setTimeout(()=>{
                navigate("/");
            },1000)
        }
    }

    const onHandleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className="container">
            <div className="loginbox">
            <h1>Register Now</h1>
                <form onSubmit={handleSubmit}>
                    <div className="logininput">
                        <label htmlFor="name">Name</label>
                        <input type="name" name='name' value={credentials.name} onChange={onHandleChange} />
                    </div>
                    <div className="logininput">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name='email' value={credentials.email} onChange={onHandleChange} />
                    </div>
                    <div className="logininput">
                        <label htmlFor="exampleInputPassword1">Create Password</label>
                        <input type="password" name='password' value={credentials.password} onChange={onHandleChange} />
                    </div>

                    <button type="submit">Submit</button>
                    <Link to="/">Already have Account Login</Link>
                </form>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    )
}

export default Signup
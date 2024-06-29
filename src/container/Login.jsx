import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3030/api/loginusers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();
            console.log("this is response ",json);
            if (json.success) {
                localStorage.setItem("userEmail", credentials.email);
                localStorage.setItem("authoToken", json.authoToken);
                navigate("/home");
            }

            if (!json.data) {
                throw new Error("Data not found");
            }
    
            if (!json.success) {
                toast.error("Enter Valid Credentials")
            }
    
        } catch (error) {
            toast.error(`please try to connect with server\n${error.message}`);
        }
       
    };

    const onHandleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className="container">
                <div className="loginbox">
                    <h1>Contact Manager Application</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="logininput">
                            <label htmlFor="email">Email address</label> <br />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={credentials.email}
                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="logininput">
                            <label htmlFor="password">Password</label> <br />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={credentials.password}
                                onChange={onHandleChange}
                            />
                        </div>
                        <button type="submit">Login</button>

                        <p>or</p>

                        <Link to="/Signup">
                            Don't have account <span>Register</span>{" "}
                        </Link>

                        <p>or</p>

                        <button>Sign in with Google</button>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    );
};

export default Login;



 // const response = await fetch("http://localhost:3030/api/loginusers", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email: credentials.email, password: credentials.password })
        // });
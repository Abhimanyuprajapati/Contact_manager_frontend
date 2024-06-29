import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Addcontact = ({addContactHandler}) => {
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const signupHandler = (e) => {
        e.preventDefault();
        // console.log(username);
        // console.log(useremail);
        // console.log(phoneNumber);
        addContactHandler({ username, useremail, phoneNumber });
        toast.success('User Successfully Added');

        setUsername('');
        setUseremail('');
        setPhoneNumber('');
        // console.log(username);
        // console.log(useremail);
        // console.log(phoneNumber);
    };
    return (
        <>
            <div className="addcontact">
                <form onSubmit={signupHandler}>
                    <h3>Add contact Details</h3>
                    <div className="addinfo">
                        <label htmlFor="name" className="name">
                            Enter Your Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter Your Name"
                        />
                    </div>

                    <div  className="addinfo">
                        <label htmlFor="email" className="name">
                            Enter Your Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)}
                            required
                            placeholder="Enter Your Email"
                        />
                    </div>

                    <div  className="addinfo">
                        <label htmlFor="number" className="name">
                            Enter Your number
                        </label>

                        <input
                            type="text"
                            id="number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            placeholder="Enter Your number"
                        />
                    </div>


                    <button>Add</button>
                </form>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    );
};

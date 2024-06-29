import React from 'react'

export const Contactlist = (props) => {
    const { contacts,getContactId } = props;

    console.log("this is id to check=>",contacts)
    const deleteConactHandler = (id) => {
        console.log(id)
        getContactId(id);
    };

    return (
        <div className='contact-list'>
            <h4 style={{ margin: "0 0 0 1.5rem", fontSize: "1.5rem" }}>View the contact</h4>
            {
                contacts && contacts.length > 0 ? (
                    contacts.map((item, index) => (
                        <div key={index} className='contactmap'>
                            <div>
                                <p>Name : {item.username}</p>
                                <p>Email : {item.useremail}</p>
                                <p>Number : {item.phoneNumber}</p>
                            </div>
                            <div>
                                <button onClick={() => deleteConactHandler(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No contacts available</p>
                )
            }
        </div>
    );
}

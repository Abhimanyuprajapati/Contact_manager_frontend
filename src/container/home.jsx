import React, { useEffect, useState } from 'react'
import Header from './header'
import { v4 as uuid } from "uuid";
import { Addcontact } from './addcontact'
import { Contactlist } from './contactlist'

export const Home = () => {

    const [contacts, setContacts] = useState([]);
    const local_store="data";
    
    const addContactHandler = (contact) => {
      // console.log(contact)
      setContacts([...contacts, { id: uuid(), ...contact }]);
    };


    const removeContactHandler = (id) => {
      // console.log(id)
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });
  
      setContacts(newContactList);
    };
   
    console.log("this is for passing data=>",contacts);

    useEffect(()=>{
      const oldData=JSON.parse(localStorage.getItem(local_store));
      if(oldData){
        setContacts(oldData)
      }
    },[])

    useEffect(()=>{
      localStorage.setItem(local_store,JSON.stringify(contacts));
    },[contacts])
  
  return (
    <>
    <Header/>
    <Addcontact addContactHandler={addContactHandler}/>
    <Contactlist contacts={contacts} getContactId={removeContactHandler} />
    </>
  )
}

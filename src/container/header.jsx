import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(true);
  const local_store_googledata = "googledata";
  const oldData = JSON.parse(localStorage.getItem(local_store_googledata));

  const local = "userEmail";
  const manuallogin = localStorage.getItem(local);
  console.log("this is manuallogin", manuallogin);

  // Determine whether to show manual login or old data based on their existence
  if (manuallogin === null && oldData === null) {
    setShow(false); // Hide if both are null
  }

  console.log("this is old data", oldData);

  const localClear = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate('/');
    }, 1200);
  };

  return (
    <>
      <div className='header'>
        <div className='headerName'>Contact Manager Application</div>
        <div className='headeruser'>
          {show && manuallogin !== null && (
            <>
              <span>{manuallogin}</span> <br />
              <br />
              <span className='headerlog' onClick={localClear}>Logout</span>
            </>
          )}

          {show && oldData !== null && (
            <>
              <span>{oldData[0].username}</span> <br />
              <br />
              <span className='headerlog' onClick={localClear}>Logout</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

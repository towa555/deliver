import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
    let navigate = useNavigate();
    return (



      <div className="center">
       This is signin page {" "}
       <button onClick={() => {navigate("/login")}}>
         login page</button>
      </div>
    );
}

export default Signin;

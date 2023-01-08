import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  let navigate = useNavigate();
  return (
    <div className="center">
     This is contact page {" "}
     <button onClick={() => {navigate("/signin")}}>
       about page</button>
    </div>
  );
}

export default Contact;

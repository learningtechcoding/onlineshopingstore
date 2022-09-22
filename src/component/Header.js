import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import menu from "../img/menu.png";
import close from "../img/close.png";
import { useState } from "react";
const Header = () => {
  
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
    <>

<nav className={toggle?'navbar expanded':'navbar'}>
        <h2 className='logo'>Shoping Store</h2>

        <div className='toggle-icon'>
        <img
          src={toggle ? close : menu}
          alt="no pics "
          className="menue"
          onClick={handleToggle}
        />
      </div>
        
        <ul className='links'>
        
            
            <li className="nav-item">
            <Link to="/" >Home</Link>
            </li>
            <li className="nav-item">
             
            <Link to="/storedata" >Store</Link>
             
            </li>
            <li className="nav-item">
            <Link to="/cart" >Shopping  Cart</Link>
             
            </li>
            <li>
            <Link to="/login" > <button className="primary-button">Sign in</button></Link>
            
           
            </li>
            <li>
            <Link to="/signup" > <button className="secondary-button">Sign Up</button></Link>
            
            
            
            </li>
            
        </ul>
       
    </nav>



 
    </>
  );
};

export default Header;

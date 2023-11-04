import React from 'react'; 
import './Sidenav.css'; 
import { Link } from "react-router-dom";
// import 'tachyons';
import { useNavigate } from 'react-router-dom';

function Sidenav1(){
  
  const navigate = useNavigate();
  const k=() => {
    navigate("/Main")
  }
  const L=() => {
    navigate("/courses")
  }
  const Q=() => {
    navigate("/Tasks")
  }
    return(
        <>

        <h1 className="skillstream" onclick="">Skill<span className="black">Stream</span></h1>

        <div id="mySidenav" className="Sidenav">
        <div className="dropdown">

        <button className="dropbtn" onClick={k}>Dashboard</button>

        </div>
    <div className="dropdown">
      <button className="dropbtn k" onClick={L}>Courses </button>
    </div>




      <div className="dropdown">
        <button className="dropbtn k" onClick={Q}>Tasks</button>
    </div>

      <div className="dropdown">
        <button onclick="document.location='./welcome.html'" className="dropbtn k">Profile</button>
    </div>


      <div className="dropdown">
        <button onclick="document.location='head to next page'" className="dropbtn k m">About Us</button>
      </div>

      <div className="dropdown">
      <button onclick="myFunction7()" className="dropbtn k">Support</button>
    <div id="myDropdown7" className="dropdown-content">
     <a href="#home">Home</a>
     <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
    </div>
    </div>
    </>
      );
    }
 

export default Sidenav1;
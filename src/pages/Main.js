import React from "react";
import './Main.css';
import 'tachyons';
import Sidenav1 from './Sidenav';
function Main(){
    return(
      <>
      <div className="body">
      <div className = "main">
      <div className="two-columns">
      <Sidenav1 />
        <div className="tab1">
        {/* <h1 className="skillstream" onclick="">Skill<span className="black">Stream</span></h1> */}

        <div className = "search">
        <h1 className="wel">Welcome back, Vijay</h1>
        </div>
        <img src="sub5.png" alt="offer upto 50%" className="ed"/>
        <div className="three-columns-grid temp">
            <div className="table">Completed Course<br/><br/><h1>28</h1></div>
            <div className="table">In progress<br/><br/><h1>28</h1></div>
            <div className="table">Wishlist<br/><br/><h1>28</h1></div>
        </div>
      </div>
      <div className="tab2">
        <div className ="comp">
        <input type="text" placeholder="Search.." name="search" className="searchbox"/>
        </div>
        <h1 className="timeline">Timeline : </h1>


      </div>
      </div>
      {/* <!-- <h1><u><I>footer session</I></u></h1> -->
      <!-- main ends--> */}
      </div>
      </div>
      </>
    );
  }


export default Main;
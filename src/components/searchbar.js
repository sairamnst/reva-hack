import React from "react";
import "../pages/Main.css"; 
import "../pages/searchbar.css";
export default function Searchbar() {
    return (
        <div className ="Find">
            <input type="text" placeholder="Search.." name="search" className="searchbox"/>
        </div>
    )
}
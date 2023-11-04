import React from "react";
import Records from "./records.json";
import Sidenav1 from "./Sidenav";
import Searchbar from "../components/searchbar"
import "./Record_server.css"
import "tachyons"
export default function Record_server(){
    console.log(typeof(Records))
    return(
        <>
        <div className="flex">
            <Sidenav1/>

            <Searchbar/>

            {/* course boxes */}
            

            
            {Records.map((item)=>(
                <div className="items">
                {item.sector_name === "Javascript" ?
                     <div className="pa3 ma3 ba b--dashed bg-light-blue">
                     <img src={item.featured_course[0]["image_url"]} />
                     <br/>
                     {item.featured_course[0]["title"]}
                     </div>
                 :""}
                </div>
            ))}
            </div>

            </>

    );
}

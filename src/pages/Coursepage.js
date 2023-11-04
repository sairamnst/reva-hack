import Cardtiles from "../components/Cardtiles";
import React from "react";
import Sidenav1 from "./Sidenav";
import 'tachyons';

import Cardlist from "./Cardlist";
import { Courses } from "../components/Courses";
export default function Coursepage(){
    return(
        <>
        <div className="main flex p-0 mr0">
        <Sidenav1 />
        {/* <div className="pl4">
        <Cardtiles />
        </div> */}
        <Cardlist robo={Courses}/>
        </div>
        
        </>
    );
}


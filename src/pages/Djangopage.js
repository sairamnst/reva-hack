// import axios from 'axios';
// import React,{ useState } from 'react';
// class Djangopage extends React.Component {
//     // const [state, setState] = useState({details:[],});
//         state={ details: [], }
//         componentDidMount() {
//             let data;
//             axios.get('http://127.0.0.1:8000/courses/')
//             .then(res=> {
//                 data=res.data;
//                 this.setState({
//                     details:data
//                 });
//             })
//             .catch(err=>{})
//         }
//         render() {
//             return (
//                 <h1>
//                     <hr></hr>
//                     {state.details.map((output,id)=>(
//                         <div key={id}>
//                             <div>
//                                 <h2>{output.sector_name}</h2>
//                             </div>
//                         </div>
//                     ))}
//                 </h1>
//             )
//         }
// }

// export default Djangopage;

// YourReactComponent.js

import React, { useState, useEffect } from 'react';
import {useContext} from "react";
import './Main.css';
import 'tachyons';
import Sidenav1 from './Sidenav';

const ethers=require("ethers");
const {ethereum}=window
function YourReactComponent() {
    let toaddress
    let inputValue
    const [data, setData] = useState({});
    const [address, setAddress] = useState();
    const [ownerAddress, setOwnerAddress] = useState();
    const [component, setComponent] = useState();
    const [isConnected, setIsConnected] = useState(false);
    const [signer, setSigner] = useState();
    let accountName
    async function connect() {
        if (typeof window.ethereum!=="undefined") {
            try {
                const accounts=await ethereum.request({method:"eth_requestAccounts"});
                setIsConnected(true);
                setOwnerAddress(accounts[0]);
                accountName=accounts[0]
                console.log(accountName)
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            setIsConnected(false);
        }
    }
    async function sendTransaction() {
        
        let params=[{
            from:accountName,
            to:toaddress,
            gas:Number(21000).toString(16),
            gasPrice:Number(2500000000).toString(16),
            value:Number(inputValue*Math.pow(10,18)).toString(16),
        }]
        let result = await window.ethereum.request({method:"eth_sendTransaction",params}).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
        fetch('http://127.0.0.1:8000/courses/')  // Replace with your Django server URL
            .then(response => response.json())
            .then(data => {
                setData(data); // Handle the fetched data here
                toaddress=data[0].featured_course[0].language
                if (isConnected) {
                    setOwnerAddress(ethereum.request({method:"eth_accounts"})[0])
                }
                console.log(toaddress)
                setComponent(data.map((item)=>(
                    <div className="items flex">
                    {/* {item.sector_name === "Javascript" ?
                         <div className="pa3 ma3 ba b--dashed bg-light-blue">
                         <img src={item.featured_course[0]["image_url"]} />
                         <br/>
                         {item.featured_course[0]["title"]}
                         <br></br>
                         <input type="text" placeholder="Search.." name="search" className="searchbox"/>
                         <button onClick={()=>connect()}>Connect</button>
            <button onClick={()=>sendTransaction()}>Execute</button>
                         </div>
                     :""} */}
                     {data.map(item => (
        <div key={item.sector_uuid}>
          <h2>{item.sector_name}</h2>
          <ul>
            {item.featured_course.map(course => (
              <li key={course.course_uuid}>
                <p>Course UUID: {course.course_uuid}</p>
                <p>Title: {course.title}</p>
                <p>Student No: {course.student_no}</p>
                <p>Author Name: {course.author.name}</p>
                <p>Price: {course.price}</p>
                <p>Image URL: {course.image_url}</p>
                <input type="text" placeholder="amount" value={inputValue} name="search" className="searchbox" onChange={(e) => inputValue=e.target.value}/>
                         <button onClick={()=>connect()}>Connect</button>
            <button onClick={()=>sendTransaction()}>Execute</button>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      ))}
                    </div>
                    
                )))
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // const count = data.length;
    // for(let i=0;i<count;i++){
    //     data[i].map((item)=>{
    //         let c = item.featured_course.length;
    //         for(let  j=0;j<c;j++){
    //             item.featured_course[j].map((cost)=>{
    //                 console.log(cost.price);
    //             })
    //         }
    //     })
    // }

    return (
        <div className='flex'>
            <Sidenav1/>
            {component}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* {data.map((item)=>(
                <div className="items">
                {item.sector_name === "Javascript" ?
                     <div className="pa3 ma3 ba b--dashed bg-light-blue">
                     <img src={item.featured_course[0]["image_url"]} />
                     <br/>
                     {item.featured_course[0]["title"]}
                     </div>
                 :""}
                </div>
            ))} */}
            {/* <p>{address}</p>
            <div className='flex'>
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
            </div> */}
        </div>
    );
}

export default YourReactComponent;
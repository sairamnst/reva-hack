import React,{Component} from 'react';
import './Card.css';


const Card = (props) => {
    return(
        <div className='grow man '>
            <img src={`https://robohash.org/${props.id}?400x400`} alt="robot" style={{height:"200px",width:"200px"}}></img>
            <div>
                <h1>{props.name}</h1>
            </div>
        </div>
    );
}

export default Card;
import React from 'react'

function Card(props){
    return(
   
        <div className="card">
            <img src={props.url || `https://via.placeholder.com/150/FF0000/FFFFFF ?Text=${props.title}`} 
            className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6>{props.author} </h6>
                    <p className="card-text">{props.description}</p>
                </div>
                { props.children }
        </div>
 

    )
}

export default Card
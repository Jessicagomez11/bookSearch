import React from 'react'

function Card(){
    return(
        <div className="card-columns">
        <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title that wraps to a new line</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
        </div>
    </div>

    )
}

export default Card
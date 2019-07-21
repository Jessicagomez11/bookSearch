import React from "react"


function SaveButton(props) {
   
    return (
        <div className="input-group-append">
            <button className="btn btn-dark" {...props}>
             
             Save
            </button>
        </div>
    )
}

export default SaveButton
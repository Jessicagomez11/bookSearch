import React from "react"

function Button(props) {
   
    return (
        <div className="input-group-append">
            <button
                onClick={props.onClick}
                 className={props.className}
                type={props.type} 
                id={props.id}>

                {props.btnText}
            </button>
        </div>
    )
}

export default Button
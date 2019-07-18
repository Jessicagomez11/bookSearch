import React from "react"

function Button(props){
    return    <button className={ props.className } type={ props.type } id={props.id}>submit</button>
}

export default Button
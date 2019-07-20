import React from "react"
// import Button from "./component/Button"

function InputBox( props ){
   
    return (
        <div className="input-group mb-3 input-group-lg">
        <input 
       
        name={ props.name } 
        value={ props.value } 
        onChange = {props.onChange}
        label= { props.label }
        aria-label="Book title search"
        type="text" 
        className="form-control" 
        placeholder="Book Title" 
        aria-describedby="bookSearch"
        />


            { props.children }
        
      </div>
    )

}
export default InputBox
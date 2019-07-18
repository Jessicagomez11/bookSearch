import React from "react"
// import Button from "./component/Button"

function InputBox({children}, props){
    return (
        <div className="input-group mb-3 input-group-lg">
        <input type={ props.type } className="form-control" placeholder="Book Title" aria-label={ props.label } aria-describedby={ props.describedby}/>
        <div className="input-group-append">
            {children}
        </div>
      </div>
    )

}
export default InputBox
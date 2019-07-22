import React from "react";


function Jumbotron({title, message, children}) {
  return (
    <div className="jumbotron text-center">
      <h1>{title}</h1>
     <h3>{message}</h3>
     {children}
    </div>
  );
}

export default Jumbotron;

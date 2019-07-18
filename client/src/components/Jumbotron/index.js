import React from "react";


function Jumbotron({children}) {
  return (
    <div className="jumbotron text-center">
      <h1>Book Search</h1>
     <h3>Search Google's library of Books</h3>
     {children}
    </div>
  );
}

export default Jumbotron;

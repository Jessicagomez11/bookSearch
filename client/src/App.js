import React from "react";
import Nav from "./components/Nav"
import Search from "./pages/Search"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bookshelf from "./pages/Bookshelf"



function App(){



    return (
<div> 
 <Router>
   <Nav/> 
  {/* <Route exact path="/" component={Search} /> */}
    <Route exact path="/bookshelf" component={Bookshelf} /> 

  
    <Search/>

 </Router>
</div>
    )
}

export default App;

import React from "react";
import Nav from "./components/Nav"
import Search from "./pages/Search"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bookshelf from "./pages/Bookshelf"



function App(){



    return (
 <Router>
<div> 
   <Nav /> 
   
  <Switch>
  
    <Route exact path="/" component={Search} /> 
    <Route exact path="/bookshelf" component={Bookshelf} /> 
   
    <Search/>
    </Switch>
</div>
 </Router>
    )
}

export default App;


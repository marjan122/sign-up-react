import React from "react";
import {
  BrowserRouter as Router,Link
} from "react-router-dom";

export default function NavRoute() {
  return (
<div className="Maincolorback">
<br />    
<br />    

<div className="navdiv">     
<Link className="stylingLinks" to="/Home">Login</Link>
<Link className="stylingLinks" to="/signup">Signup</Link>
</div> 
</div> 

  );
}
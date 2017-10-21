import React from "react";
import "./Nav.css";

const Nav = props =>
/*Change a href to links*/
<nav className="navbar clearNav">
<div className="container-fluid">
    <div className="navbar-header">
        <h3 className="navbar-text"><a href="#" className="navFont">Brian R. Martin</a></h3>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#" className="navFont">RÈSUMÈ</a></li>
            <li ><a href="#" className="navFont">CONTACT</a></li>
            <li><a href="#" className="navFont">CODING PROJECTS</a></li>
            <li><a href="#" className="navFont">WRITING SAMPLES</a></li>
        </ul>
    </div>
</div>
</nav>

export default Nav;

import React from "react";
import { NavLink } from 'react-router-dom'
import './styles/navBar.css'
import './imgs/user.png'
export default function NavBar(props) {

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                <NavLink className="navLink1" class="navigation" exact='true' to="/home/calendar"> calendar  </NavLink>{"     "}
                <NavLink className="navLink1" class="navigation" exact='true' to="/home/faq"> faq  </NavLink>{"     "}
                <NavLink className="navLink1" class="navigation" exact='true' to="/contact"> contact  </NavLink>{"     "}
                <NavLink className="navLink1" class="navigation" exact='true' to="/home/filter"> filter  </NavLink>{"     "}
                <NavLink className="navLink1" class="navigation" exact='true' to="/logOut"> log out  </NavLink>{"     "}
                <img src={require('./imgs/user.png')} />
            </nav>
        </div>
    );
}
import React from "react";
import { NavLink,useNavigate } from 'react-router-dom'


export default function OwnersNavBar(props) {
    let navigate=useNavigate();
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
    function update() {
        navigate('/Update')
    }
    return (
<div className="container">
<nav className="navBars" id="ftco-navbar">
            <NavLink className="navLink1" class="navigation" exact='true' to="/auditorium-owners/home/calendar"> calendar  </NavLink>{"  |  "}
            <NavLink className="navLink1" class="navigation" exact='true' to="/auditorium-owners/home/faq"> faq  </NavLink>{"  |  "}
            <NavLink className="navLink1" class="navigation" exact='true' to="/auditorium-owners/home/contact"> contact  </NavLink>{"  |  "}
            <NavLink className="navLink1" class="navigation" exact='true' to="/auditorium-owners/home/filter"> filter  </NavLink>{"  |  "}
            <NavLink className="navLink1" class="navigation" exact='true' to="/auditorium-owners/home/add_auditorium"> add auditorium  </NavLink>{"  |  "}
            <NavLink className="navLink1" class="navigation" exact='true' to="/logOut"> log out  </NavLink>
            <img src={require('../imgs/user.png')} style={{ "width": 75, "height": 75,"marginTop":-10 }}/>
            <h1>{currentUser.f_name}</h1>
            </nav>
            <div className="profile">
                <div className="userProfile" style={{ "float": "left", "color": "aquamarine" }}>
                    <img src={require('../imgs/user.png')} style={{ "width": 75, "height": 75, "marginTop": -60, "float": "left", "marginLeft": 30 }} />
                    <h3 style={{ "marginLeft": "20%" }}>{currentUser.f_name}</h3>
                </div>
                <div className="dropdown-content">
                    <button onClick={update}>update details</button>
                </div>
            </div>
        </div>
    );
}
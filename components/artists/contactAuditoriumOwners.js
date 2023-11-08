import React, { useEffect, useState } from 'react'
import NavBar from './artistsNavBar'
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";

export default function ContactOwner(props) {
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
    const [auditoriumOwners, setAllAuditoriumOwners] = useState([]);
    let allAuditoriumOwners;

    async function getAll() {
        try {
            allAuditoriumOwners = await fetch("http://localhost:8080/api/auditorium-owners")
            allAuditoriumOwners = await allAuditoriumOwners.json();
            setAllAuditoriumOwners(allAuditoriumOwners);
        }
        catch (error) {
            console.error("error while getting data try again in few minutes");
        }
    }

    useEffect(() => {

        if (props.IsHome) {
            props.IsHome();
        }
        getAll();
    }, [])
    return (
        <div className="Contact" style={{ "marginTop": 100 }}>
            {auditoriumOwners.map(owner => <div style={{ "border": "1px solid white", "margin": 18, "width": 500, "padding": 10 }}>
                <div style={{ "backgroundColor": "aquamarine","display":"flex", "fontFamily": "cursive","fontSize": 25, "textShadow": "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", "margin" :10 }}><span style={{ "marginRight": 30 }}><TbListDetails /></span>{"    " + owner.f_name + "    " + owner.l_name}</div>
                <div style={{ "display": "flex" }}> <span style={{ "marginRight": 30 }}><BsTelephoneOutboundFill /></span> <a href={'tel:+972-' + owner.phone} title={'Give ' + owner.f_name + " " + owner.l_name + ' a call'} style={{ "color": "aquamarine" }}>{owner.phone}</a></div>
            </div>)}
        </div>


    )
}
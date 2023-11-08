import React from 'react'
import { useNavigate } from 'react-router-dom';
import './update.css'
import { useEffect } from 'react';

export default function Update(props) {
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
    let type;
    let navigator = useNavigate()

    async function getData1(event) {
        event.preventDefault();
        const user = {
            "last_name": event.target.l_name.value,
            "address": event.target.address.value,
            "phone": event.target.phone.value,
            "email": event.target.email.value,
            "password": event.target.pass.value,
        }
        switch (currentUser.user_type) {

            case "simpleusers":
                type = "simple-users"
                break;
            case "auditorium_owners":
                type = "auditorium-owners";
                break;
            case "artists":
                type = "artists"
        }
        try {
            console.log(currentUser.user_type);
            console.log(currentUser);
            const rawResponse = await fetch(`http://localhost:8080/api/${type}/${currentUser.personal_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
                mode: 'cors'
            });
            navigator(`/${type}/home`)
        }
        catch (err) {

        }
    }
    useEffect(() => {
        if (props.IsHome) {
            props.IsHome();
        }
    }, [])
    return (
        <div className="Update">
            <div style={{"justifyContent": "center"}}>Update your profile <br/>change the details you would like to change </div>
            <form className='Update' onSubmit={getData1}>
                <input name="id" className="login__input" value={currentUser.personal_id} readonly></input>
                <input name="f_name" className="login__input" value={currentUser.f_name} readonly></input>
                <input placeholder="your new last name here" name="l_name" className="login__input"></input>
                <input placeholder="your new password here" type="password"  name="pass" className='login__input'></input>
                <input placeholder="your new address here" name="address" className="login__input"></input>
                <input placeholder="your new phone here" name="phone" className="login__input"></input>
                <input placeholder="your new email here" name="email" className='login__input'></input>
                <input placeholder="your new agent here" name="agent" className='login__input'></input>
                <br />
                <button type="submit" className="button login__submit" >Update now!</button>
            </form>
        </div>
    )
}


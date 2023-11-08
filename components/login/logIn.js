import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './login.css'

export default function LogIn(props) {
    let navigate = useNavigate();
    async function getData(event) {
        debugger
        event.preventDefault();
        const user = {
            id: event.target.id.value,
            password: event.target.pass.value,
            type: event.target.user_type.value
        }
        try {
            let data = await fetch(`http://localhost:8080/api/${user.type}/${user.id}`, { method: 'GET' })
            data = await data.json();
            if (data.length == 0) {
                alert("user does not exist please sign up first");
                navigate('/SignUp');
            }
            else {

                window.localStorage.setItem("currentUser", JSON.stringify(data[0], user.type)); //
                // navigate('/artists/home')
                navigate(`/${user.type}/home`);
            }
        }
        catch (err) {
            alert("you have not exist please sign up first")
        }
    }

    let openSignUp = () => {
        navigate('/SignUp');
    }
    useEffect(() => {
        if (props.isMain) {
            props.isMain();
        }
    }, [])
    // set current user?
    return (
        <div className="RegisterForm">
            <div className="center">
                <div style={{ "border-left": "5px solid dodgerblue", "width": "264px", "margin-left": "109px" }}>
                    <h1>Log In</h1></div>
                <form onSubmit={getData} action="https://httpbin.org/post" method="POST" >
                    <div className="inputbox">
                        <input type="text" className="Input" required="required" placeholder="user id" name="id"/>
                    </div>
                    <div className="inputbox">
                        <input type="text" className="Input" required="required" placeholder="Password" name="pass" />
                    </div>
                    <div className="box">
                        <select name="user_type" required className="selectBtn">
                            <option name="type" value="simple-users"> simple-user </option>
                            <option name="type" value="auditorium-owners"> auditorium-owner </option>
                            <option name="type" value="artists"> artist </option>
                        </select></div>
                    <div className="inputbox">
                        <br /><button className="inputbox" id="SignUP" onClick={openSignUp}  >new here? please sign up first!</button>
                    </div>
                    <div className="inputbox">
                        <br />  <button className="Submit" type="submit"  >submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}


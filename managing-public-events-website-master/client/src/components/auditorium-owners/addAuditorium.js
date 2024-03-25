import React from "react";

export default function AddAuditorium(props) {
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
    async function getData(event) {
        event.preventDefault();
        const auditorium = {
            // "auditorium_id": event.target.id.value,
            "name": event.target.name.value,
            "address": event.target.address.value,
            "owner": currentUser.personal_id,
            "capacity": event.target.capacity.value,
            "price": event.target.price.value,
            "type": event.target.type.value,
        }
        addNewUser(auditorium)
    }
    async function addNewUser(auditorium) {
        try {
            (async () => {
                const rawResponse = await fetch('http://localhost:8080/api/auditoriums', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(auditorium),
                    mode: 'cors'
                });
                const content = await rawResponse.json();
            })();
        }
        catch (error) {
            console.error("error while getting data try again in few minutes");
        }
        alert("success");
    }

    return (
        <div className="App">
            <form onSubmit={getData} action="https://httpbin.org/post" method="POST" className="addForm">
                <br /><input id="login__password" type="text" className="logIn_input" placeholder="please enter auditorium name" name="name"></input>
                <br /><input id="login__password" type="text" className="logIn_input" placeholder="please enter auditorium address" name="address"></input>
                <br /><input id="login__password" type="number" className="logIn_input" placeholder="please enter auditorium capacity" name="capacity"></input>
                <br /><input id="login__password" type="number" className="logIn_input" placeholder="please enter auditorium price" name="price"></input>
                <br /><select name="type" required>
                    <option name="type" value="3"> Stadium </option>
                    <option name="type" value="2"> only-hall </option>
                    <option name="type" value="1">hall and gallery  </option>
                </select>

                <br /><button className="submit_btn" type="submit">add</button>
            </form>
        </div>
    )

}
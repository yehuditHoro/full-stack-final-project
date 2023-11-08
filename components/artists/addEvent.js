import React, { useEffect } from "react";
import { useState } from "react";


export default function AddEvent(props) {
    debugger
    let i = 1;
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
    const [auditoriums, setAuditoriums] = useState([]);
    const [url, setUrl] = useState("");
    const [returnTime, setReturnTime] = useState([]);
    let allAuditoriums;

    async function getAuditoriums() {
        try {
            allAuditoriums = await fetch("http://localhost:8080/api/auditoriums")
            allAuditoriums = await allAuditoriums.json();
            setAuditoriums(allAuditoriums)
        }
        catch (error) {
            console.error("error while getting data try again in few minutes");
        }
    }

    // changing the datetime

    function pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }
    async function getData(event) {
        event.preventDefault();
        const currEvent = {
            // "id": event.target.id.value,
            "presentor_id": currentUser.personal_id,
            "name": event.target.name.value,
            "description": event.target.description.value,
            "date": (event.target.date.value).toString().slice(0, 19).replace('T', ' '),
            "price": event.target.price.value,
            "url": event.target.url.value,
            "type": event.target.type.value,
            "auditorium": event.target.auditorium.value
        }
        console.log(currEvent);
        try {
            let t = `http://localhost:8080/api/shows/auditorium=${currEvent.auditorium}/date=${currEvent.date.toString().slice(0, 10)}`
            let data = await fetch(t.split(" ")[0], { method: 'GET' })
            if (data[0]) {
                data = await data.json();
                alert("can't add event there is another event in the same date.please change the date or the auditorium");
            }
            else {
                addNewEvent(currEvent);
            }
        }
        catch (error) {
            console.error("error while getting data try again in few minutes");
        }
    }

    function showPrivew(e) {
        let showUrl = e.target.value;
        setUrl(showUrl)
    }

    async function addNewEvent(currEvent) {
        try {
            (async () => {
                const rawResponse = await fetch('http://localhost:8080/api/shows', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currEvent),
                    mode: 'cors'
                });
                const content = await rawResponse.json();
            })();
            alert("success");
        }
        catch (error) {
            console.error("error while getting data try again in few minutes");
        }
    }

    useEffect(() => {
        getAuditoriums();
    }, [])
    return (
        <div className="App">
            <form onSubmit={getData} method="POST" className="addForm">
                <br /><input id="login__password" required type="text" className="logIn_input" placeholder="please enter event name" name="name"></input>
                <br /><input id="login__password" required type="text" className="logIn_input" placeholder="please enter event description" name="description"></input>
                <br /><input id="login__password" required type="number" className="logIn_input" placeholder="please enter event price" name="price"></input>
                <br /><input id="login__password" required type="datetime-local" className="logIn_input" placeholder="please enter event date" name="date" ></input>
                <br /><input id="login__password" required type="text" className="logIn_input" placeholder="please enter event url" name="url" onChange={(e) => showPrivew(e)}></input>
                <br /><img style={{ 'width': 200 }} src={url} />
                <br /><select name="type" required>
                    <option name="type" value="1"> act </option>
                    <option name="type" value="2">concert</option>
                    <option name="type" value="3">movie</option>
                    <option name="type" value="4">sing</option>
                </select>
                <br />
                auditorium:
                <br />
                <select name="auditorium">
                    {auditoriums.map((auditorium, counter) => <option value={i++} key={counter++}>{auditorium.auditorium_name}</option>)}
                </select>
                <br /><button className="submit_btn" type="submit" >add</button>
            </form>
        </div>
    )

}
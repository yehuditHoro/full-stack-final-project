import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function LogOut(props) {
    let navigate = useNavigate()
    useEffect(() => {
        window.localStorage.removeItem("currentUser")

        if (props.IsHome) {
            props.IsHome();
        }
    }, [])

    function returnBack() {
        navigate('/main')
    }
    return (
        <div className="App">
            <h1>Good Bye</h1>
            <button onClick={returnBack}>click here to return to the main page</button>
        </div>
    )
}
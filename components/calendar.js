
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router';
import NewSpecificShow from './newSpecificShow';
import './calendar.css'
// import 'react-calendar/dist/Calendar.css';
export default function CalendarApp(props) {
    let show_place = 0;
    const navigate = useNavigate();
    const [show, setShow] = useState()
    const [currId, setId] = useState()
    const [IsSpecific, setSpecific] = useState(false);
    const [type, setType] = useState("");
    let curr;
    // let showsToDisplay
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))

    // let currentDate = (new Date().getDate()) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    const [date, setDate] = useState(new Date())
    const [currentShows, setShows] = useState([])
    useEffect(() => {
        if (props.IsHome) {
            props.IsHome();
        }
    }, [])
    function pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }

    async function onChangeH(e) {
        // e = Fri Jul 22 2022 00:00:00 GMT+0300 (שעון ישראל (קיץ)) {}
        setDate(e)
        const date = e.getFullYear() + '-' + pad(e.getMonth() + 1) + '-' + pad(e.getDate())
        try {
            let data = await fetch(`http://localhost:8080/api/shows/date=${date}`)
            data = await data.json();
            console.log(data);
            setShows(data)
        }
        catch(err){
            console.error("error while getting data try again in few minutes");
        }
       
        console.log(currentShows);
    }

    useEffect(() => {
        switch (currentUser.user_type) {
            case "simpleusers":
                setType("simple-users")
                break;
            case "auditorium_owners":
                setType("auditorium-owners");
                break;
            case "artists":
                setType("artists")
        }
    }, [])
    async function getCurrShow(show) {
        let i = setId(show.id)
        show_place = show.id - 1;
        curr = currentShows[show_place];
        let p = await setShow(curr)
        debugger
        setSpecific(true);
        navigate(`/${type}/home/SpecificShow`, { state: { show_id: show.id, currShow: show } });
    }

    return (
        <div className="App">
            <div >click a day to get all this day's shows</div>
            <div className="calendar-container">
                <Calendar onChange={onChangeH} value={date} />
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
                <br />
                {currentShows.map((show, counter) => <img onClick={() => getCurrShow(show)} src={show.show_url} alt="your pc dosen't support this format" style={{ "width": 500, "height": "auto", "margin": 40 }} key={counter++} />)}
                {IsSpecific &&
                    <NewSpecificShow show_id={currId} currShow={show} />}
            </div>
        </div>
    )
}

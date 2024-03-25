
import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ContactUs from '../contact';
import ContactOwner from './contactAuditoriumOwners';
import ArtistsFaq from './faq';
import CalendarApp from '../calendar';
import AddEvent from './addEvent';
import Filter from '../filter';
import ArtistNavBar from './artistsNavBar';
import LogOut from '../logOut';
import NewSpecificShow from '../newSpecificShow';
export default function ArtistsHome() {
    const navigate = useNavigate();
    const [shows, setShows] = useState([]);
    const [show, setShow] = useState();
    const [showId, setId] = useState(0);
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
    let show_place = 0;
    const [IsHome, setHome] = useState(true);
    const url = window.location.pathname.split('/').pop();
    useEffect(() => {
        getShows();
        setHomeTrue();
    }, [url])
    function setHomePic() {
        setHome(false)
    }
    function setHomeTrue() {
        setHome(true)
    }

    async function getShows() {
        try {
            const firstName = currentUser.f_name;
            const lastName = currentUser.l_name;
            let filteredData = await fetch(`http://localhost:8080/api/shows/artist=${firstName}/${lastName}`)
            filteredData = await filteredData.json();
            console.log("hgsbyuihsdfht" + filteredData[0]);
            setShows(filteredData)
        }
        catch (error) {
            console.error("error while getting data try again in few minutes");
        }
    }

    let curr;
    async function ShowSpecifi(show) {
        setId(show.id)
        // show_place = show.id - 1;
        // curr = shows[show_place];
        let p = await setShow(show)
        navigate('./SpecificShow')
    }
    // useEffect(()=>{
    //     getShows();
    // })
    return (
        <div className="home">
            <header>
                <ArtistNavBar />
            </header>
            <div className="InnerRouter">
                <Routes>
                    <Route exact="true" element={<CalendarApp IsHome={setHomePic} />} path="/calendar" />
                    <Route exact="true" element={<ContactUs IsHome={setHomePic} />} path="/contact" />
                    <Route exact="true" element={<ContactOwner IsHome={setHomePic}/>} path="/contact-auditorium-owners" />
                    <Route exact="true" element={<ArtistsFaq IsHome={setHomePic}/>} path="/faq" />
                    <Route exact="true" element={<Filter IsHome={setHomePic} />} path="/filter" />
                    <Route exact="true" element={<AddEvent IsHome={setHomePic}/>} path="/add-event" />
                    <Route exact="true" element={<LogOut />} path="/logOut" />
                    <Route exact="true" element={<NewSpecificShow show_id={showId} IsHome={setHomePic} currShow={show} />} path="/SpecificShow" />
                </Routes>
            </div>
            {IsHome &&
                <div style={{ "marginTop": 100 }}>
                    {shows.map((show, counter) => <img src={show.show_url} style={{"cursor" : "pointer"}} onClick={() => ShowSpecifi(show)} alt="your pc dosen't support this format" style={{ "width": 500, "height": 300, "margin": 40 }} key={counter++} />)}
                </div>
            }
        </div>

    )
}



import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import OwnersNavBar from './ownersNavBar';
import AddAuditorium from './addAuditorium';
import LogOut from '../logOut';
import ContactUs from '../contact';
import OwnersFaq from './faq';
import Filter from '../filter';
import CalendarApp from '../calendar';
import NewSpecificShow from '../newSpecificShow';


// export default function OwnersHome() {
//     const [shows, setShows] = useState([]);
//     let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))

//     async function getShows() {
//         let currentDate = new Date();
//         try {
//             //let date = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
//             let arrShows = await fetch(`http://localhost:8080/api/shows`, { method: 'GET' })
//             arrShows = await arrShows.json();
//             //console.log(arrShows);
//             setShows(arrShows)
//         }
//         catch (error) {
//             console.error("error while getting data try again in few minutes");
//         }
//     }
//     getShows();
//     return (
//         <div className="home">
//             <OwnersNavBar />
//             <Routes>
//                 <Route exact="true" element={<CalendarApp />} path="/calendar" />
//                 <Route exact="true" element={<ContactUs />} path="/contact" />
//                 <Route exact="true" element={<OwnersFaq />} path="/faq" />
//                 <Route exact="true" element={<AddAuditorium />} path="/add_auditorium" />
//                 <Route exact="true" element={<Filter />} path="/filter" />
//                 <Route exact="true" element={<LogOut />} path="/logOut" />
//                 <Route exact="true" element={<NewSpecificShow />} path="/SpecificShow" />

//             </Routes>
//             {IsHome &&
//                 <div style={{ "marginTop": 100 }}>
//                     {shows.map((show, counter) => <img src={show.show_url} onClick={() => ShowSpecifi(show)} alt="your pc dosen't support this format" style={{ "width": 500, "height": 300, "margin": 40 }} key={counter++} />)}
//                 </div>
//             }
//         </div>

//     )
// }



export default function OwnersHome(props) {
    let show_place = 0;
    const [showId, setId] = useState(0);
    const navigate = useNavigate();
    const [shows, setShows] = useState([]);
    const [IsHome, setHome] = useState(true);
    const [show, setShow] = useState()
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
            let arrShows = await fetch(`http://localhost:8080/api/shows`, { method: 'GET' })
            arrShows = await arrShows.json();
            console.log(arrShows);
            setShows(arrShows);
        }
        catch (err) {
            alert(err)
        }
    }
    let curr;
    async function ShowSpecifi(show) {
        setId(show.id)
        show_place = show.id - 1;
        curr = shows[show_place];
        let p = await setShow(curr)
        navigate('./SpecificShow')
    }
    useEffect(()=>{
        if(props.isMain){
            props.isMain(); 
        }
    },[])
    return (
        <div className="home">
            <OwnersNavBar />
            <div >
                <Routes>
                    <Route exact="true" element={<CalendarApp IsHome={setHomePic}/>} path="/calendar" />
                    <Route exact="true" element={<ContactUs IsHome={setHomePic}/>} path="/contact" />
                    <Route exact="true" element={<OwnersFaq IsHome={setHomePic}/>} path="/faq" />
                    <Route exact="true" element={<AddAuditorium IsHome={setHomePic}/>} path="/add_auditorium" />
                    <Route exact="true" element={<Filter IsHome={setHomePic}/>} path="/filter" />
                    <Route exact="true" element={<LogOut />} path="/logOut" />
                    <Route exact="true" element={<NewSpecificShow IsHome={setHomePic} currShow={show} show_id={showId}/>} path="/SpecificShow" />
                </Routes></div>
            {IsHome &&
                <div style={{ "marginTop": 100 }}>
                    {shows.map((show, counter) => <img src={show.show_url} style={{"cursor" : "pointer"}}   onClick={() => ShowSpecifi(show)} alt="your pc dosen't support this format" style={{ "width": 500, "height": 300, "margin": 40 }} key={counter++} />)}
                </div>
            }


        </div>

    )
}








import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import UsersNav from './usersNav';
import CalendarApp from '../calendar';
import UserFaq from './faq';
import Filter from '../filter';
import ContactUs from '../contact';
import LogOut from '../logOut';
import NewSpecificShow from '../newSpecificShow';
export default function UsersHome(props) {
    debugger
    let show_place = 0;
    const [showId,setId]=useState(0);
    const navigate = useNavigate();
    const [shows, setShows] = useState([]);
    const [IsHome, setHome] = useState(true);
    const [currShow, setShow] = useState()
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
    useEffect(()=>{
        if(props.isMain){
            props.isMain(); 
        }
    },[])
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
        // navigate('./SpecificShow')
        debugger
        navigate(`./SpecificShow`, { state: { show_id: show.id, currShow: show } });

    }
    return (
        <div className="home">
            <UsersNav />
            <div >
                <Routes>
                    <Route exact="true" element={<CalendarApp IsHome={setHomePic} />} path="/calendar" />
                    <Route exact="true" element={<ContactUs IsHome={setHomePic} />} path="/contact" />
                    <Route exact="true" element={<UserFaq IsHome={setHomePic} />} path="/faq" />
                    <Route exact="true" element={<Filter IsHome={setHomePic} />} path="/filter" />
                    <Route exact="true" element={<UsersHome />} path="/home" />
                    <Route exact="true" element={<LogOut IsHome={setHomePic} />} path="/logOut" />
                    <Route exact="true" element={<NewSpecificShow  IsHome={setHomePic}/>} path="/SpecificShow" />

                </Routes></div>
            {IsHome &&
                <div style={{ "marginTop": 100 }}>
                    {shows.map((show, counter) => <img src={show.show_url} style={{"cursor" : "pointer"}}  onClick={() => ShowSpecifi(show)} alt="your pc dosen't support this format" style={{ "width": 500, "height": 300, "margin": 40 }} key={counter++} />)}
                </div>
            }


        </div>

    )
}

{/* <Route exact="true" element={<NewSpecificShow show_id={showId} IsHome={setHomePic} currShow={show} />} path="/SpecificShow" /> */}






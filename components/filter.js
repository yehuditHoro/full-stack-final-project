import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import NewSpecificShow from './newSpecificShow';
export default function Filter(props) {
    const navigate=useNavigate();
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
    const [artists, setArtists] = useState([]);
    const [showTypes, setShowsTypes] = useState([]);
    const [auditoriums, setAuditoriums] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [type,setType] = useState();
    const [IsSpecific, setSpecific] = useState(false);
    const [currId, setId] = useState()
    const [show, setShow] = useState()
    let show_place;
    let curr;
    
    let allArtists;
    let allTypeOfShows;
    let allAuditoriums;


    async function getAll() {
        try {
            allArtists = await fetch("http://localhost:8080/api/artists")
            allArtists = await allArtists.json();
            setArtists(allArtists);
            allTypeOfShows = await fetch("http://localhost:8080/api/shows-types")
            allTypeOfShows = await allTypeOfShows.json();
            setShowsTypes(allTypeOfShows);
            allAuditoriums = await fetch("http://localhost:8080/api/auditoriums")
            allAuditoriums = await allAuditoriums.json();
            console.log(allAuditoriums);
            setAuditoriums(allAuditoriums)
        }
        catch (error) {
            console.error("error while getting data try again in few minutes");
        }
    }
    useEffect(() => {
        getAll();
        if( props.IsHome){
            props.IsHome();
        }
    }, [])
    // getAll();
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

    async function filterData(obj, event) {
        debugger
        const data = {
            "artist": event.target.value || "",
            "type": event.target.value || "",
            "price": event.target.value || 0,
            "auditorium": event.target.value || ""
        }
        try {
            switch (obj) {
                case 'artist':
                    let firstName = data.artist.split(" ")[0];
                    let lastName = data.artist.split(" ")[1];
                    let filteredData = await fetch(`http://localhost:8080/api/shows/artist=${firstName}/${lastName}`)
                    filteredData = await filteredData.json();
                    console.log("hgsbyuihsdfht" + filteredData[0]);
                    setFiltered(filteredData)
                    break;
                case 'type':
                    let type = data.type;
                    let filteredData1 = await fetch(`http://localhost:8080/api/shows/show-type=${type}`)
                    filteredData1 = await filteredData1.json();
                    setFiltered(filteredData1)
                    break;
                case 'price':
                    let price = data.price;
                    let filteredData2 = await fetch(`http://localhost:8080/api/shows/price=${price}`)
                    filteredData2 = await filteredData2.json();
                    setFiltered(filteredData2)
                    break;
                case 'auditorium':
                    let auditorium = data.auditorium;
                    let filteredData3 = await fetch(`http://localhost:8080/api/shows/auditorium=${auditorium}`)
                    filteredData3 = await filteredData3.json();
                    setFiltered(filteredData3)
                    break;
            }

        }
        catch (error) {
            console.error("error while getting data try again in few minutes");
        }
    }
    async function getCurrShow(show) {
        let i = setId(show.id)
        let p = await setShow(show)
        debugger
        setSpecific(true);
        navigate(`/${type}/home/SpecificShow`, { state: { show_id: show.id, currShow: show } });
    }
    return (
        <div className="filter">
            <form className="forms">
                <br />
                artist:
                <br />
                <select name="artist" className="selectBtn" onChange={(e) => filterData('artist', e)}>
                    <option disabled selected value="default" className="selectBtn">select the artist you want</option>
                    {artists.map((artist, counter) => <option value={artist.f_name + " " + artist.l_name} key={counter++}>{artist.f_name}  {artist.l_name}</option>)}
                </select>
                <br />
                type:
                <br />
                <select name="type" className="selectBtn" onChange={(e) => filterData('type', e)}>
                    <option disabled selected value="default" className="selectBtn">select the type you want</option>
                    {showTypes.map((type, counter) => <option value={type.show_type_id} key={counter++}>{type.show_type}</option>)}
                </select>
                <br />
                price:
                <br />
                <input type="number" name="price" placeholder='Enter the estimated price' className="inputFilter" onClick={(e) => filterData('price', e)}></input>
                <br />
                auditorium:
                <br />
                <select name="auditorium" className="selectBtn" onChange={(e) => filterData('auditorium', e)}>
                    <option disabled selected value="default" className="selectBtn">select the auditorium you want</option>
                    {auditoriums.map((auditorium, counter) => <option value={auditorium.auditorium_id} key={counter++} >{auditorium.auditorium_name}</option>)}
                </select>
            </form>
            {filtered.length > 0 && filtered.map((detail, counter) => <img src={detail.show_url} onClick={() => getCurrShow(detail)} alt="your pc dosen't support this format" style={{ "width": 500, "height": "auto", "margin": 40 }} key={counter++} />)}
            {filtered.length == 0 && "no shows matched your search."}
            {IsSpecific &&
                    <NewSpecificShow show_id={currId} currShow={show} />}
        </div>

    )
}

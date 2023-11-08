import React, { useState } from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import LogIn from '../login/logIn'
import SignUp from '../login/signUp'
import UsersHome from '../simple-users/home'
import ContactUs from '../contact'
import LogOut from '../logOut'
import Update from '../update'
import Filter from '../filter'
import ArtistsHome from '../artists/home'
import OwnersHome from '../auditorium-owners/home'
import CalendarApp from '../calendar'
import Error from '../error/error'
// import './logo.scss'
// import Main_page from './main'
import './main.css'

function Main_page() {
    const [isMain,setMain]=useState(true);
    let navigate=useNavigate();
    function goToLogIn(){
        debugger
        navigate('/LogIn')
    }
    function setMainPic() {
        setMain(false)
    }
    return (
        <div className='main_page' >
            {/* <div className="logo"><span>S</span><span>h</span><span>o</span><span>w</span><br/><span>M</span><span>e</span></div> */}
            <div >
                <Routes>
                    <Route exact="true" element={<Main_page />} path="/main" />
                    {/* <Route exact="true" element={<Main_page />} path="/" /> */}

                    {/* <Route exact="true" element={<Filter />} path="/filter" /> */}
                    <Route exact="true" element={<LogIn isMain={setMainPic}/>} path="/logIn" />
                    <Route exact="true" element={<SignUp isMain={setMainPic}/>} path="/SignUp" />
                    <Route exact="true" element={<UsersHome isMain={setMainPic}/>} path="/simple-users/home/*" />
                    <Route exact element={<ArtistsHome isMain={setMainPic}/>} path="/artists/home/*" />
                    <Route exact="true" element={<OwnersHome isMain={setMainPic}/>} path="/auditorium-owners/home/*" />
                     {/* <Route exact="true" element={<ContactUs />} path="/contact" /> */}
                    <Route exact="true" element={<Update isMain={setMainPic}/>} path="/Update" />
                    <Route exact="true" element={<LogOut isMain={setMainPic}/>} path="/logOut" />
                    {/* <Route exact="true" element={<Error isMain={setMainPic}/>} path="/*" /> */}

                    {/* <Route exact="true" element={<Error isMain={setMainPic}/>} path="/*" /> */}

                    {/* <Route exact="true" element={<CalendarApp />} path="/calendar" />  */}
                </Routes>
            </div>
            {isMain&&
            <div className="Main" onClick ={goToLogIn}>
            <div className="content"  >
                <img src={require('../imgs/main.png')} className="main_img" ></img>
            </div>
            <div className="curtainBody">
                <div id="leftCurtain" className="curtainContainer">
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                </div>
                <div id="rightCurtain" className="curtainContainer">
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                    <div className="unCurtain"></div>
                </div>
                <div className="overlay"></div>
            </div>
        </div>}
        </div>
    )
}
export default Main_page;
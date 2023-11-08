
import React, { useEffect, useState } from 'react'




export default function ArtistsFaq() {

    const [isCommentClicked, setCommentClick] = useState([false,false,false,false,false,false,false]); 

    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))

    function handleClick(i) {
        let  itemsArr =  [...isCommentClicked];
        itemsArr[i] = !isCommentClicked[i];
        setCommentClick(itemsArr);
    };
    return (
        <div className="App">
                <div className="faq">
                <h1>FAQ</h1>
                    <button className="single_faq" onClick={()=>handleClick(0)}>Can I select show by auditorium?</button>
                    {isCommentClicked[0] && (
                        <h4 >You can click the "Filter" button and then select "auditorium" and select your auditorium</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(1)}>Can I add a new event?</button>
                    {isCommentClicked[1] && (
                        <h4>For sure, click the "Add Event" category in the main menu</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(2)}>Can I watch shows by date? </button>
                    {isCommentClicked[2] && (
                        <h4>Yes, you can click on the calendar to see performances by date</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(3)}>How do I join the site?</button>
                    {isCommentClicked[3] && (
                        <h4>You can click on the profile on the left of the main screen to join.</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(4)}>How can I contact hall owners?</button>
                    {isCommentClicked[4] && (
                        <h4>You can get hall owner information in two ways, by setting a date for the show, or by clicking on "Receive hall owner information" on the main screen</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(5)}>Can I see how many people are registered for my event?</button>
                    {isCommentClicked[5] && (
                        <h4>for sure. When clicking on the event you can see all the details.</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(6)}>Can I contact the site owners?</button>
                    {isCommentClicked[6] && (
                        <h4>Clicking on "Contact Us" in the main menu will give a form which can be filled out and sent to the site owners.</h4>)}
                </div>
            </div>
    )
}


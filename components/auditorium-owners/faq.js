
import React, {  useState } from 'react'

export default function OwnersFaq() {

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
                    <button className="single_faq" onClick={()=>handleClick(0)}>How can I find my favorite artist?</button>
                    {isCommentClicked[0] && (
                        <h4 >You can click the "Filter" button and then select "Artist" and select your artist</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(1)}>How do I order a concert ticket</button>
                    {isCommentClicked[1] && (
                        <h4>After selecting the show you just need to click on the "Pay" button and follow the instructions there</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(2)}>How can I watch all the shows next week? </button>
                    {isCommentClicked[2] && (
                        <h4>Click on the calendar icon and select the date range</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(3)}>How can I see the shows in my environment?</button>
                    {isCommentClicked[3] && (
                        <h4>You can see them by selecting the "Filter" button and selecting the location</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(4)}>how can I get a discount on a show?</button>
                    {isCommentClicked[4] && (      
                        <h4>If you subscribe you can get discounts and other special offers</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(5)}>How do I register for this site?</button>
                    {isCommentClicked[5] && (
                        <h4>It's very simple, you just have to click the sign up button on the sign up page</h4>)}
                    <button className="single_faq" onClick={()=>handleClick(6)}>Is there a special price for the group?</button>
                    {isCommentClicked[6] && (
                        <h4>Yes, you can see this price page</h4>)}
                </div>
            </div>
   
    )
}




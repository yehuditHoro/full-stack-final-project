
import './error.css'
import React,{useEffect} from 'react';

export default function Error(props) {
    useEffect(()=>{
        if(props.isMain){
            props.isMain(); 
        }
    },[])
    return (
        <main role="main">
            <a href="//www.google.com">
                <span id="logo" aria-label="Google" role="img"></span>
            </a>
            <p> <b>404.</b> <ins>page not found:(.</ins></p>
            <p>You have reached a dead end page
                Please try again to get what you requested. <br />
                And what I don't have I have nothing to write so I will write blah blah blah blah blah<ins>Please try again</ins></p>
        </main>
    )
}
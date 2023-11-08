import React, { useState, useEffect } from 'react'

export default function ContactUs(props) {
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"))
    useEffect(() => {
        if (props.IsHome) {
            props.IsHome();
        }
    }, [])

    const [textarea, setTextarea] = useState("");
    const [Email, setEmail] = useState("");

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    async function sendEmail() {
        debugger
        try {
            const rawResponse = await fetch(`http://localhost:8080/api/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: Email, text: textarea }),
                mode: 'cors'
            });
        }
        catch (err) { console.log(err); }
    }


    return (
        <div className="contactUs">

            <section id="contact">

                <h1 class="section-header">Contact</h1>

                <div class="contact-wrapper">


                    <form id="contact-form" class="form-horizontal" role="form">

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="NAME" name="name" required /></div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="email" class="form-control" id="name" onChange={setEmail} placeholder="EMAIL" name="name" required />  </div>
                        </div>

                        <textarea id="textA" class="form-control" rows="10" onChange={handleChange} placeholder="MESSAGE" name="message" required></textarea>

                        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div class="alt-send-button">
                                <span class="send-text" onClick={sendEmail}>SEND</span>
                            </div>

                        </button>

                    </form>



                    <div class="direct-contact-container">

                        <ul class="contact-list">

                            <li class="list-item" style={{ "cursor": "pointer" }}> <span class="contact-text place" style={{ "color": "aquamarine" }}><img src={require('./imgs/pin.png')} style={{ "width": 50 }}></img>Jerusalem</span></li>

                            <li class="list-item" style={{ "cursor": "pointer" }}><span class="contact-text phone"> <img className="icons" src={require('./imgs/phone-call.png')} /><a href="tel:+972-5723456" title="Give me a call" style={{ "color": "aquamarine" }}>+972-5723456</a></span></li>

                            <li class="list-item" style={{ "cursor": "pointer" }}><span class="contact-text gmail"><img className="icons" src={require('./imgs/outlook.png')}></img><a href="mailto:showme@outlook.co.il" title="Send me an email" style={{ "color": "aquamarine" }}>showme@outlook.co.il</a></span></li>

                        </ul>

                    </div>
                </div>
            </section>
        </div>

    )
}







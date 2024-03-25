// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './login.css'

// export default function SignUp(props) {
//     let navigate = useNavigate();
//     let data;
//     async function getData(event) {
//         event.preventDefault();
//         const user = {
//             "personal_id": event.target.id.value,
//             "first_name": event.target.f_name.value,
//             "last_name": event.target.l_name.value,
//             "address": event.target.address.value,
//             "phone": event.target.phone.value,
//             "email": event.target.email.value,
//             "password": event.target.pass.value,
//             "type": event.target.type_of_user.value,
//         }

//         try {
//             data = await fetch(`http://localhost:8080/api/${user.type}/${user.id}`, { method: 'GET' })
//             if (data[0]) {
//                 data = await data.json();
//             }
//             if (data[0]) {//user exist
//                 alert("user already exist please log in first");
//                 navigate('/LogIn');
//             }
//             else {
//                 db_sign_up(user);
//                 // navigate('/home');

//             }
//         }
//         catch (err) {
//             alert(err)
//             db_sign_up(user);
//         }
//     }
//     useEffect(() => {
//         if (props.isMain) {
//             props.isMain();
//         }
//     }, [])
//     function db_sign_up(user) {
//         window.localStorage.setItem("currentUser", JSON.stringify(user))
//         addNewUser(user);
//         navigate(`/${user.type}/home`)   // each one goes to another page according to his type
//     }
//     async function addNewUser(user) {
//         try {
//             (async () => {
//                 const rawResponse = await fetch(`http://localhost:8080/api/${user.type}`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(user),
//                     mode: 'cors'
//                 });
//                 const content = await rawResponse.json();
//                 console.log(content);
//             })();
//             alert("success");
//         }
//         catch (err) {
//             console.error("error while getting data try again in few minutes");
//         }
//     }
//     return (
//         <div className='RegisterForm'>
//             <form className='center'  onSubmit={getData}>
//             <div style={{ "border-left": "5px solid dodgerblue", "width": "264px", "margin-left": "109px" }}>
//                 <h1>Sign Up</h1></div>
//                 <div className="inputbox" id="SignUpCenter">
//                 <input type="text" placeholder="your id here" name="id" className="Input" />
            
//                 <input placeholder="your first name here" name="f_name" className="Input" className="signUpInput" />
//                 <input placeholder="your last name here" name="l_name" className="Input" className="signUpInput" />
//                 <input type="password" placeholder="your password here" name="pass" className='Input' className="signUpInput" />
//                 <input placeholder="your address here" name="address" className="Input" className="signUpInput" />
//                 <input placeholder="your phone here" name="phone" className="Input" className="signUpInput" />
//                 <input placeholder="your email here" name="email" className='Input' className="signUpInput" />
//                 <br />
//                 <br /><select name="type_of_user" className="selectBtn">
//                     <option name="type" value="simple-users">user</option>
//                     <option name="type" value="auditorium-owners">auditorium owner</option>
//                     <option name="type" value="artists" > artist </option>
//                 </select>
//                 <br />
//                 <button type="submit" className="Submit" >Sign up Now</button>
//                 </div>
//             </form>

//         </div>
//     )
// }
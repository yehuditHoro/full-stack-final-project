import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Comments from './comments';
import './styles/singlePost.css'

function SingleAnswer(props) {
    let counter = 0;
    const idparam = useParams()
    const [commentsData, setComments] = useState([""]);
    const [isCommentClicked, setCommentClick] = useState(false);
    useEffect(() => {
      
    }, [idparam])
    function fsetCommentClick(flag) {

        //   navigate('./comments')
        setCommentClick(flag)
    }
    return (
        <div>
            <h1>id: {idparam.name}</h1>
            <h1>title: {data.title}</h1>
            <h3>body: {data.body}</h3>
            <button onClick={() => fsetCommentClick(!isCommentClicked)}> comments </button>


            {isCommentClicked && commentsData.map(item => {
                return (
                    <Comments info={item} key={counter++} />)
            })}

        </div>
    );
}

export default SingleAnswer;

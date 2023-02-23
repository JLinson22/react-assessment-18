import React, { useState, useEffect } from 'react'

const Comments = () => {
    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.

    // you will need to use the useEffect hook. Do this in async / await syntax.

    const [comments, setComments] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await response.json()
            setComments(data)
        }
        getData()
    }, [])

    const handleClick = (e) => {
        console.log(e)
    }

    return(
    <>
    {comments.map(comment => (
        <div key={comment.id} onClick={handleClick}>
            {comment.body}
        </div>
    ))}
    </>     
    )
}

export default Comments
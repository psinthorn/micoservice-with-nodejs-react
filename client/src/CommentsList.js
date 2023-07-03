import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CommentsList = ({ postId}) => {
    // useState for comments list state
    const [comments, setComments] = useState([]); 

    // fetch all to comments list for each post by axios 
    const fetchDatas = async () => {
            const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
            setComments(response.data);
    }

    const commentsList = Object.values(comments);

    useEffect(() => {
        fetchDatas();
    },[]);

        const renderComments = commentsList.map((comment) => {
            return (
                <li key={comment.id}>
                    {comment.content}
                </li>
            )
        });

        return (
            <ul>
                {renderComments}
            </ul>
          )
}

export default CommentsList
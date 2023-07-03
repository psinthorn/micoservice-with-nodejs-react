import axios from 'axios';
import React, { useState } from 'react'

const CommentCreate = ({ postId }) => {
    // create new state for comment and initial state as empty string
    const [content, setContent] = useState();
    
    // create on submit function to receive comment and send post request to create comment url
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
        
            setContent('');
        
    };

  return (
    <div>
        <form onSubmit={onSubmit}>
            <small>commment</small>
            <input 
                value={content}
                onChange={(event) => setContent(event.target.value)} 
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="comment"
                />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CommentCreate
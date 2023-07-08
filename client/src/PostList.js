import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentsList from './CommentsList';

const PostList = () => {
// using async/await  
// create posts state
const [posts, setPosts] = useState({});
// fetch data from posts service by using axios and run only one time when page refresh by using useEffect
const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4002/posts')
    setPosts(response.data)
    console.log(response.data);
}
const postLists = Object.values(posts);

useEffect(() => {
    fetchPosts();
},[]);
console.log(posts);
// render all the post list by using map

    
    //console.log(postLists);
    const render = postLists.map((post, index) => {
        return (
            <div key={index} className='flex flex-col p-2 m-2 gap-10 border border-gray-500 rounded-md max-w-xl' >
                <div>
                    <div className='text-xl'>{post.title}</div>
                    <CommentsList comments={ post.comments } />
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        )
    });

  return (
    <div>
        {render}
    </div>
  )
}

export default PostList
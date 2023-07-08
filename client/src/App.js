import React from 'react'
import PostCreate from './PostCreate'
import axios from 'axios'
import PostList from './PostList'
import '../src/styles/styles.css'


const App = () => {

  const submitTitle = async (title) => {
      const response = await axios.post('http://localhost:4000/posts', { title })
      console.log(response);
  }

  return (
    <div className='overflow-hidden w-screen-full h-screen-full mx-auto'>
      <div className='flex'>
        <div className='w-full flex justify-center'>
          <PostCreate onSubmitTitle={submitTitle}/>
        </div>
        <div className='flex w-full'>
          <PostList />
        </div>
      </div>
      
    </div>
  )
}

export default App;
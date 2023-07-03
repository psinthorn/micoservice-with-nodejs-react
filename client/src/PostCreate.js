import React, {useState} from 'react'

const PostCreate = ({onSubmitTitle}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitTitle(title)
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
          <div className="gap-6 mb-6">
                  <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Posts</label>
                  <input 
                    value={title} 
                    onChange={event => setTitle(event.target.value)} 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="post"/>          
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}

export default PostCreate;
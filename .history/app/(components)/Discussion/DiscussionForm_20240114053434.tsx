'use client'
import axios from 'axios'
import React, {useState} from 'react'
import toast from 'react-hot-toast'
import { Author } from '../auth/page'
const DiscussionForm = () => {
  const [discussions, setDiscussions] = useState({
    title: '',
    description: '',
    reply: ''
  })
  const createDiscussion = async () => {
    const {title, description, reply} = discussions
    try {
      const response = await axios.post('/api/auth/discussion', {
        title,
        description,
        reply,
        authorId: Author
      })
      console.log(response)
    } catch (error) {
      toast.error(`${error}`)
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createDiscussion()
    console.log(discussions)
  }
  return (
    <div className='w-96'>
      <h1 className='font-semibold text-center text-2xl text-nowrap'>START AN AMAZING DISCUSSION</h1>
      <div className="mt-4">
        <form action="submit" onSubmit={onSubmit}>
          <div className="">
          <label>
            <span className='block uppercase'>
              title:
            </span>
          </label>
        <input
                // {...register(title)}
                onChange={(e) => setDiscussions(prevState => ({ ...prevState, title: e.target.value }))}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                placeholder=".."
              />
          </div>
          <div className="mt-8">
          <label>
            <span className='block uppercase'>
              description:
            </span>
          </label>
        <input
                // {...register(title)}
                onChange={(e) => setDiscussions(prevState => ({ ...prevState, description: e.target.value }))}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                placeholder=".."
              />
          </div>
          <div className="mt-8">
          <label>
            <span className='block uppercase'>
              comment:
            </span>
          </label>
        <textarea
                // {...register(title)}
                onChange={(e) => setDiscussions(prevState => ({ ...prevState, reply: e.target.value }))}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                
                placeholder=".."
              />
          </div>
          <div className="mt-8">
            <button className='bg-teal-600 w-full py-4 rounded-md hover:bg-teal-700 transition'>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DiscussionForm

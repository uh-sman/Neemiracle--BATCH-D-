'use client'
import React, {useState} from 'react'
import DiscussionModal from './DiscussionModal'
import axios, { AxiosError } from 'axios'
import { Author } from '../auth/page'
interface DiscussionProps {
    session: any
}
const Discussions = (discussion : null, {
    session
}: DiscussionProps) => {
    console.log('session user',session.user)
    const [toggleModal, setToggleModal] = useState<boolean>(false)

    const [discussions, setDiscussions] =  useState()

    const getDiscussions = async () => {
        try {
            const response = await axios.get('/api/discussion')
        } catch (e) {
            const error = e as AxiosError
            return {
                user: null,
                error,
            }
        }
    }
    const handleToggleModal = () => {
         setToggleModal(!toggleModal)
    }
    if(discussion !== null) {
        return (
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1>No discussion available!</h1>
                <div className="mt-4">
                    <button onClick={handleToggleModal} className='bg-gray-200 hover:bg-gray-300 hover:scale-125 transition py-3 px-4 rounded-md text-gray-900 font-semibold'>Start a Discussion</button>
                </div>
                {
                    toggleModal && <DiscussionModal  close={handleToggleModal}/>
                }
            </div>
        )
    }
  else {
    return (
        <div>
          discussion
        </div>
      )
  }
}

export default Discussions

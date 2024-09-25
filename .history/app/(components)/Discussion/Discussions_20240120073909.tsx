'use client'
import React, {useState, useEffect} from 'react'
import DiscussionModal from './DiscussionModal'
import axios, { AxiosError } from 'axios'
import { Author } from '../auth/page'
import { SessionProvider, useSession } from 'next-auth/react'
interface DiscussionProps {
    user: any | null | undefined
}
const Discussions = (discussion : null, {
    user
}: DiscussionProps) => {
    // console.log('session user',user)
    const { data: session } = useSession()
    const [toggleModal, setToggleModal] = useState<boolean>(false)
    let email: any ;
    email = session?.user?.email
    const [discussions, setDiscussions] =  useState()
    // console.log('session from user',session)
    useEffect(()=> {
        getDiscussions()
    },[])
    const getDiscussions = async () => {
        try {
            const response = await axios.get('/api/discussion', email)
            // const response = await fetch('/api/discussion', {
            //     method: 'GET',
            //     // body: email
            // })
            console.log(response)
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

export default function DiscussionProvider(){
    return(
        <SessionProvider>
            <Discussions/>
        </SessionProvider>
    )
}

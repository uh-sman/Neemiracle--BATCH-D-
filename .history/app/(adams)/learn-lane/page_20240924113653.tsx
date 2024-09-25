import React from 'react'
import Text from '../components/(custom-components)/text'
import Image from 'next/image'
import { images } from '../utils'

const LearnLane = () => {
  return (
    <div>
       <div className='flex flex-col sm:flex-col items-center justify-center gap-6 sm:gap-10 mt-[200px]'>
                    <div className='text-center sm:text-left relative'>
                        <Text w="bold" size="5xl" className="text-black text-3xl absolute -top-16 -left-[300px] text-nowrap">
                            Learn Lane
                        </Text>
                        <Text w="light" size="5xl" className="text-black text-3xl absolute -left-[100px] top-[20px] text-nowrap">
                            Learn Lane
                        </Text>
                    </div>
                    <div className='mt-[40px]'>
                        <Image src={images.work} alt='study image' className='w-[300px] h-[300px] sm:w-[687.6px] sm:h-[687.6px]' />
                    </div>
                </div>
    </div>
  )
}

export default LearnLane

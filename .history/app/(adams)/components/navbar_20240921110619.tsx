import React from 'react'
import { images, links } from '../utils'
import Text from './(custom-components)/text'
import Image from 'next/image'
type NavbarProps = {
    
}

const Navbar = () => {
  return (
    <div className='w-full h-screen'>
    <div>
    <ul className='flex justify-around'>
      {links().map((link) => (
                <Text key={link.name} size="xl" w="semibold" className="text-black">
                    {link.name}
                </Text>
            ))}
      </ul>
    </div>
    <div className="">
        <div className='flex items-center justify-center gap-[20px]'>
            <div>
                <Text w="bold" size="5xl" className="text-black">
                    Design is a creative <br/> process
                </Text>
            </div>
            <div>
                <Image src={images.study} alt='study image' className='w-[687.6px] h-[687.6px]'/>
            </div>
        </div>

        <div>
            <div>
                <Text w="bold" size="2xl" className="text-black">
                    Abdulmalik Adam <br/> Product Designer
                </Text>
            </div>
            <div></div>
        </div>
    </div>
    </div>
  )
}

export default Navbar

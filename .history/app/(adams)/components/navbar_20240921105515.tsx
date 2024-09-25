import React from 'react'
import { links } from '../utils'
import Text from './(custom-components)/text'
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
        <div className='grid grid-cols-2'>
            <div>
                <Text w="bold" size="2xl">
                    Design is a creative process
                </Text>
            </div>
            <div></div>
        </div>
    </div>
    </div>
  )
}

export default Navbar

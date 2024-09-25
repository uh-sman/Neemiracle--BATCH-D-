import React from 'react'
import { links } from '../utils'
import Text from './(custom-components)/text'
type NavbarProps = {
    
}

const Navbar = () => {
  return (
    <div className='w-full h-screen'>
      <ul className='flex'>
      {links().map((link) => (
                <Text key={link.name} size="sm" w="semibold" className="text-black">
                    {link.name}
                </Text>
            ))}
      </ul>
    </div>
  )
}

export default Navbar

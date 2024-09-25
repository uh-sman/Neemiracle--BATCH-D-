import React from 'react'
import { links } from '../utils'
import Text from './(custom-components)/text'
type NavbarProps = {
    
}

const Navbar = () => {
  return (
    <div className='w-full h-screen'>
      <ul className='flex justify-between'>
      {links().map((link) => (
                <Text key={link.name} size="lg" w="semibold" className="text-black">
                    {link.name}
                </Text>
            ))}
      </ul>
    </div>
  )
}

export default Navbar

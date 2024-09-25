import React, { useState } from 'react';
import { images, links, menus } from '../utils';
import Text from './(custom-components)/text';
import Image from 'next/image';

const Navbar = () => {
    const [toggle, setToggle] = useState<number | null>(null); // Change type to handle null
    console.log("toggle...", toggle);

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
                            Design is a creative <br /> process
                        </Text>
                    </div>
                    <div>
                        <Image src={images.study} alt='study image' className='w-[687.6px] h-[687.6px]' />
                    </div>
                </div>

                <div className='px-8 grid grid-cols-2'>
                    <div className='flex'>
                        <Text w="bold" size="2xl" className="text-black">
                            Abdulmalik Adam <br /> Product Designer
                        </Text>
                        <div className="relative w-full">
                            <Image src={images.arrow} alt='arrow-image' className='w-[277.02px] h-[277.02px] absolute -inset-20' />
                        </div>
                    </div>
                    <div className='flex'>
                        <Text w="bold" size="lg" className="text-black">
                            I am a skilled product designer specializing in creating user-centered web and mobile application design across various industries, including fintech, logistics, medtech, edutech, and digital marketing.
                        </Text>
                        <Image src={images.profile} alt='profile' />
                    </div>
                </div>
                <div>
                    {menus.map((menu) => (
                        <div key={menu.id}>
                            <div className='grid grid-cols-3 p-6 border-b border-black/90 cursor-pointer' onClick={() => setToggle(toggle === menu.id ? null : menu.id)}>
                                <Text w="bold" size="lg" className="text-black">{menu.title}</Text>
                                <Text w="bold" size="lg" className="text-black">{menu.title}</Text>
                                <Text w="bold" size="lg" className="text-black">{menu.title}</Text>
                            </div>

                            {/* Dropdown Content */}
                            {toggle === menu.id && (
                                <div className="p-6 bg-gray-100">
                                    {/* Replace with your desired content for the dropdown */}
                                    <Text w="light" size="md" className="text-black">This is additional content for {menu.title}.</Text>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <div>
                        <Image src={images.reachOut} alt='image'/>
                    </div>
                    <div className='flex'>
                        <Image src={images.linkedIn} alt='' />
                        <Image src={images.dribble} alt='' />
                        <Image src={images.behance} alt='' />
                        <Image src={images.email} alt='' />
                    </div>
                    {/* <Text w="bold" size="5xl" className="text-black">Want to reach out?</Text> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

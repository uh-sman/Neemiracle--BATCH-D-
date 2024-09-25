import React, { useState } from 'react';
import { images, links, menus } from '../utils';
import Text from './(custom-components)/text';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [toggle, setToggle] = useState<number | null>(null); // Change type to handle null
    console.log("toggle...", toggle);
    const router = useRouter()

    return (
        <div className='w-full h-screen px-4 sm:px-8'>
            <div>
                <ul className='flex flex-wrap justify-around'>
                    {links().map((link) => (
                        <Text key={link.name} size="xl" w="semibold" className="text-black">
                            {link.name}
                        </Text>
                    ))}
                </ul>
            </div>
            <div className="my-16 sm:my-44">
                <div className='flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10'>
                    <div className='text-center sm:text-left'>
                        <Text w="bold" size="5xl" className="text-black text-3xl">
                            Design is a creative <br className='hidden sm:block' /> process
                        </Text>
                    </div>
                    <div>
                        <Image src={images.study} alt='study image' className='w-[300px] h-[300px] sm:w-[687.6px] sm:h-[687.6px]' />
                    </div>
                </div>

                <div className='px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 my-24 sm:my-56 place-items-center'>
                    <div className='flex flex-col sm:flex-row'>
                        <Text w="bold" size="2xl" className="text-black">
                            Abdulmalik Adam <br /> Product Designer
                        </Text>
                        <div className="relative w-full sm:w-auto mt-4 sm:mt-0">
                            <Image src={images.arrow} alt='arrow-image' className='w-[100px] h-[100px] sm:w-[277.02px] sm:h-[277.02px] absolute -inset-10 sm:-inset-20' />
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row'>
                        <Text w="bold" size="lg" className="text-black">
                            I am a skilled product designer specializing in creating user-centered web and mobile application design across various industries, including fintech, logistics, medtech, edutech, and digital marketing.
                        </Text>
                        <Image src={images.profile} alt='profile' className='mt-4 sm:mt-0'/>
                    </div>
                </div>
                <div className='my-16 sm:my-44'>
                    {menus.map((menu) => (
                        <div key={menu.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-6 border-b border-black/90 cursor-pointer' onClick={() => setToggle(toggle === menu.id ? null : menu.id)}>
                                <Text w="bold" size="lg" className="text-black">{menu.title}</Text>
                                <Text w="bold" size="lg" className="text-black hidden sm:block">{menu.title}</Text>
                                <Text w="bold" size="lg" className="text-black hidden sm:block">{menu.title}</Text>
                            </div>

                            {/* Dropdown Content */}
                            {toggle === menu.id && (
                                <div onClick={() => router.push('/learn-lane')} className="p-4 sm:p-6 bg-gray-100">
                                    {/* Replace with your desired content for the dropdown */}
                                    <Text w="light" size="md" className="text-black">This is additional content for {menu.title}.</Text>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-10 sm:gap-20 my-24 sm:my-44 mx-4 sm:mx-8'>
                    <div>
                        <Image src={images.reachOut} alt='image' className='w-[60%] sm:w-[35%] h-auto'/>
                    </div>
                    <div className='flex gap-8 sm:gap-[40px]'>
                        <Image src={images.linkedIn} alt='image' className='w-[10%] sm:w-[7%] h-auto'  />
                        <Image src={images.dribble} alt='image' className='w-[10%] sm:w-[7%] h-auto'  />
                        <Image src={images.behance} alt='image' className='w-[10%] sm:w-[7%] h-auto'  />
                        <Image src={images.email} alt='image' className='w-[10%] sm:w-[7%] h-auto'  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

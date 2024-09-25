import React, { useState } from 'react';
import { images, links, menus } from '../utils';
import Text from './(custom-components)/text';
import Image from 'next/image';

const Navbar = () => {
    const [toggle, setToggle] = useState<number | null>(null);
    console.log("toggle...", toggle);

    return (
        <div className='w-full h-auto md:h-screen'>
            <div>
                <ul className='flex flex-col md:flex-row justify-around'>
                    {links().map((link) => (
                        <Text key={link.name} size="xl" w="semibold" className="text-black py-2">
                            {link.name}
                        </Text>
                    ))}
                </ul>
            </div>
            <div className="my-10 md:my-44">
                <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                    <div>
                        <Text w="bold" size="4xl md:size-5xl" className="text-black text-center md:text-left">
                            Design is a creative <br /> process
                        </Text>
                    </div>
                    <div>
                        <Image src={images.study} alt='study image' className='w-full max-w-[687.6px] h-auto' />
                    </div>
                </div>

                <div className='px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 my-10 md:my-56'>
                    <div className='flex flex-col items-start'>
                        <Text w="bold" size="2xl" className="text-black">
                            Abdulmalik Adam <br /> Product Designer
                        </Text>
                        <div className="relative w-full">
                            <Image src={images.arrow} alt='arrow-image' className='w-full max-w-[277.02px] h-auto absolute -inset-20' />
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <Text w="bold" size="lg" className="text-black">
                            I am a skilled product designer specializing in creating user-centered web and mobile application design across various industries, including fintech, logistics, medtech, edutech, and digital marketing.
                        </Text>
                        <Image src={images.profile} alt='profile' className='mt-4 w-full max-w-[200px]' />
                    </div>
                </div>
                <div className='my-10 md:my-44'>
                    {menus.map((menu) => (
                        <div key={menu.id}>
                            <div className='grid grid-cols-1 md:grid-cols-3 p-6 border-b border-black/90 cursor-pointer' onClick={() => setToggle(toggle === menu.id ? null : menu.id)}>
                                <Text w="bold" size="lg" className="text-black text-center md:text-left">{menu.title}</Text>
                                <Text w="bold" size="lg" className="text-black text-center md:text-left">{menu.title}</Text>
                                <Text w="bold" size="lg" className="text-black text-center md:text-left">{menu.title}</Text>
                            </div>

                            {toggle === menu.id && (
                                <div className="p-6 bg-gray-100">
                                    <Text w="light" size="md" className="text-black">This is additional content for {menu.title}.</Text>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-center gap-10 my-10 md:my-44 mx-8'>
                    <div>
                        <Image src={images.reachOut} alt='image' className='w-[80%] max-w-[300px] h-auto'/>
                    </div>
                    <div className='flex justify-center gap-10'>
                        <Image src={images.linkedIn} alt='image' className='w-[10%] max-w-[50px] h-auto'  />
                        <Image src={images.dribble} alt='image' className='w-[10%] max-w-[50px] h-auto'  />
                        <Image src={images.behance} alt='image' className='w-[10%] max-w-[50px] h-auto'  />
                        <Image src={images.email} alt='image' className='w-[10%] max-w-[50px] h-auto'  />
                    </div>
                    {/* <Text w="bold" size="5xl" className="text-black">Want to reach out?</Text> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

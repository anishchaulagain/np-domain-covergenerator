'use client'
import { ArrowLeftCircle, ArrowRightCircle, BarChart3Icon, Menu, MenuIcon } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    const [activeIndex, setActiveIndex] = useState(null);

    

    const navigation = [
        {
            id: 1,
            title: 'HOME',
            href: '#'

        },
        {
            id: 2,
            title: 'ABOUT',
            href: '#about'

        },
        {
            id: 3,
            title: 'COVER LETTER',
            href: '#projects'

        },
       

    ]
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="" href="#">
                            <h1 className='font-bold text-xl text-black'>Cover<span className='text-primary'>Craft</span></h1>
                        </a>
                    </div>

                    <div className="hidden md:block ">
                        <nav aria-label="Global" className='font-bold'>
                            <div className="flex items-center gap-6 md:gap-10 lg:gap-12 text-sm font-bold ">

                                {navigation.map((item, index) => (
                                    <a href={item.href}  key={item.id} className={`nav-link ${activeIndex === index ? 'text-[#5c7af8]' : ''}`}>{item.title}</a>
                                ))}

                            </div>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className=" sm:gap-4 hidden sm:block">
                            <a
                                className="rounded-md bg-[#5c7af8] px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="https://drive.google.com/file/d/1Eg-3ReaQkCW7LnqsAjuqiCpuJ9U7lPyC/view"
                            >
                                DOWNLOAD CV
                            </a>


                        </div>
                        <div>
                            <div onClick={handleNav} className="pt-3 cursor-pointer block md:hidden">{!nav ? <ArrowLeftCircle className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#5c7af8] mr-2' /> : <Menu className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#5c7af8] mr-2' />}
                            </div>
                            <div
                                className={
                                    !nav
                                        ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out  duration-500 '
                                        : 'fixed left-[-100%] w-[60%] top-0 h-full ease-in-out duration-500'
                                }
                            >
                                <h1 className="w-full text-3xl font-bold text-[#5c7af8] mt-10 p-3">

                                    <Link href='/' className='w-full  mt-10 p-3 text-black font-primary font-bold text-xl ml-2 lg::ml-5 md:ml-3 md:text-2xl cursor-pointer border border-black rounded-md md:px-2 md:py-1 px-2 py-1 '>Cover<span className='text-[#5c7af8] hover:text-yellow-500'>Craft</span></Link>
                                </h1>
                                <div className="p-3 flex flex-col gap-3">
                                    {navigation.map((item) => (
                                        <Link href={item.href} key={item.id} className="p-4 border-b border-gray-600 text-black cursor-pointer hover:border-gray-800 font-semibold">
                                            {item.title}
                                        </Link>
                                    ))}


                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
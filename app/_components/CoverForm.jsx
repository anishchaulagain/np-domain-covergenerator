
'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { toPng } from 'html-to-image';
import { Button } from '@/components/ui/button';

const CoverForm = () => {
    const [domain, setDomain] = useState('')
    const [primary, setPrimary] = useState('')
    const [secondary, setSecondary] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    //console.log('domain:',domain)
    const [currentDate, setCurrentDate] = useState('');

    const sectionRef = useRef(null);

    const downloadImage = () => {
        if (sectionRef.current === null) {
            return;
        }

        toPng(sectionRef.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'download.png';
                link.click();
            })
            .catch((err) => {
                console.error('Failed to download image', err);
            });
    };

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString();
        setCurrentDate(formattedDate);
    }, []);

 //SAAS PLATFORM


    return (
        <div className="container mx-auto py-16 " >
            <div className='text-center flex flex-col gap-y-5 mb-10 '>
                <h1 className='text-2xl font-bold md:text-4xl' >Generate cover letter for <span className='text-primary'>.com.np</span> </h1>
                <p className='md:text-2xl text-lg relaxed'>For the domain registration, you need to submit a Cover letter. Not sure how to write a cover letter? Get .np Domain Registration Request Cover Letter now.</p>
            </div>
            <div className=''>

                <section className='mt-10 '>
                    <form className='flex flex-col gap-y-5 pt-10'>
                        <div>
                            <label htmlFor="UserDomain" className="block text-xs font-medium text-gray-700"> Domain Name </label>

                            <input
                                type="text"
                                id="domain"
                                placeholder="example.com.np"
                                className="mt-2 px-2 w-full rounded-md border-gray-500 shadow-sm sm:text-sm py-3"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}

                            />
                        </div>

                        <div>
                            <label htmlFor="userPrimaryNameServer" className="block text-xs font-medium text-gray-700"> Primary Name Server</label>

                            <input
                                type="text"
                                id="secondary"
                                placeholder="ns101.anishchaulagain.com.np"
                                className="mt-2 px-2 py-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value={primary}
                                onChange={(e) => setPrimary(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="UserSecondaryNameServer" className="block text-xs font-medium text-gray-700"> Secondary Name Server </label>

                            <input
                                type="text"
                                id="secondary"
                                placeholder="ns101.anishchaulagain.com.np"
                                className="mt-2 px-2 py-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value={secondary}
                                onChange={(e) => setSecondary(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="UserName" className="block text-xs font-medium text-gray-700"> Name </label>

                            <input
                                type="text"
                                id="Name"
                                placeholder="Enter Your Name"
                                className="mt-2 px-2 py-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="UserAddress" className="block text-xs font-medium text-gray-700"> Address </label>

                            <input
                                type="text"
                                id="Address"
                                placeholder="Enter Your Address"
                                className="mt-2 px-2 py-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </form>
                </section>

                <section className='container mt-10 bg-[#f9fafb] md:py-12 py-8' id='section-to-download' ref={sectionRef}>
                    <div className='lg:px-20 lg:py-10'>
                        <div>
                            <h2 className='text-right'>Date: {currentDate}</h2>
                        </div>

                        <div className='mt-10 flex flex-col gap-y-3'>
                            <h2>To,</h2>
                            <h2>The Hostmaster</h2>
                            <h2>Mercantile Communication Pvt. Ltd</h2>
                            <h2>Durbar Marg, Kathmandu</h2>
                        </div>

                        <div className='mt-10 text-center'>
                            <h2 className='font-bold'>Subject: NP Domain Registration</h2>
                        </div>

                        <div>
                            <h2 className='mt-10'>Dear Sir/Madam,</h2>

                        </div>

                        <div className='mt-5'>
                            <h2>I am writing this letter to request you to kindly register a <span className='font-bold cursor-pointer'>{domain}</span> for me based on my name. I have provided my personal details, and also attached a scanned copy of my citizenship with this letter.I would be very glad if you approve my domain registration request.
                                Thank you very much for consideration. I look forward to hearing from you soon.</h2>
                        </div>
                        <div className='mt-10'>
                            <h2>Thank you very much for consideration. I look forward to hearing from you soon.</h2>
                        </div>
                        <div className='mt-10 flex flex-col gap-y-3 '>
                            <h2>Domain name: <span className='font-bold'>{domain}</span> </h2>
                            <h2>Primary Name Server: <span className='font-bold'>{primary}</span> </h2>
                            <h2>Secondary Name Server: <span className='font-bold'>{secondary}</span> </h2>
                        </div>

                        <div className='mt-10 flex flex-col gap-y-3'>
                            <h2>Yours Sincerely,</h2>
                            <h2>Name: <span className='font-bold'>{name}</span></h2>
                            <h2>Address: <span className='font-bold'>{address}</span></h2>
                        </div>
                    </div>
                </section>
                <div className='flex items-center justify-center mt-10'><Button variant='outline' onClick={downloadImage} className='bg-primary text-white' >Download Now</Button></div>

            </div>
        </div>
    )
}

export default CoverForm
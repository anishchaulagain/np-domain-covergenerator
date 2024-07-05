
'use client'
import React from 'react'
import { useState } from 'react'

const CoverForm = () => {
    const [domain, setDomain] = useState('')
    const [primary, setPrimary] = useState('')
    const [secondary, setSecondary] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    return (
        <div className="container mx-auto" >
            <div className='text-center flex flex-col gap-y-5 mb-10 '>
                <h1 className='text-2xl font-bold md:text-4xl' >Generate cover letter for <span className='text-primary'>.com.np</span> </h1>
                <p className='md:text-2xl text-lg relaxed'>For the domain registration, you need to submit a Cover letter. Not sure how to write a cover letter? Get .np Domain Registration Request Cover Letter now.</p>
            </div>
            <div className=''>

                <section className='mt-10 '>
                    <form className='flex flex-col gap-y-5 pt-10'>
                        <div>
                            <label htmlFor="UserDomain" className="block text-xs font-medium text-gray-700"> Email </label>

                            <input
                                type="text"
                                id="domain"
                                placeholder="example.com.np"
                                className="mt-2 w-full rounded-md border-gray-500 shadow-sm sm:text-sm py-3"
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
                                className="mt-2 py-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
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
                                className="mt-2 py-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
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
                                className="mt-2 py-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
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
                                className="mt-2 py-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </form>
                </section>

                <section>
                   
                </section>
            </div>
        </div>
    )
}

export default CoverForm
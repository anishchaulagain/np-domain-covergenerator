import React from 'react'

const Footer = () => {
    return (
        <footer className=" mt-20">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a className="" href="#">
                        <h1 className='font-bold text-xl text-black'>Cover<span className='text-primary'>Craft</span></h1>
                    </a>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; 2024. All rights reserved. Dev: Anish Chaulagain
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import Image from 'next/image'
import React from 'react'

const Intro = () => {
    return (
        <>


            <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center container mx-auto">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Crafting Your Path to Success
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                        A well-crafted cover letter is your first opportunity to make a strong impression on potential employers. It complements your resume by highlighting your skills, experiences, and enthusiasm for the role, giving you a competitive edge in the job market.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src="/coverletter.png"
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>

        </>
    )
}

export default Intro
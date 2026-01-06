
'use client'
import React, { useState, useEffect, useRef } from 'react'
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { Button } from '@/components/ui/button';
import { Download, FileText, Image as ImageIcon } from 'lucide-react';

const CoverForm = () => {
    const [domain, setDomain] = useState('')
    const [primary, setPrimary] = useState('')
    const [secondary, setSecondary] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [currentDate, setCurrentDate] = useState('');

    const sectionRef = useRef(null);

    const downloadImage = () => {
        if (sectionRef.current === null) {
            return;
        }

        toPng(sectionRef.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = `cover-letter-${domain || 'generated'}.png`;
                link.click();
            })
            .catch((err) => {
                console.error('Failed to download image', err);
            });
    };

    const downloadPDF = () => {
        if (sectionRef.current === null) {
            return;
        }

        toPng(sectionRef.current, { cacheBust: true, })
            .then((dataUrl) => {
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'px',
                    format: 'a4'
                });

                const imgProps = pdf.getImageProperties(dataUrl);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(`cover-letter-${domain || 'generated'}.pdf`);
            })
            .catch((err) => {
                console.error('Failed to download PDF', err);
            });
    }

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className='text-center max-w-3xl mx-auto mb-12'>
                <h1 className='text-3xl font-bold md:text-5xl mb-4 tracking-tight' >
                    Generate cover letter for <span className='text-primary'>.com.np</span>
                </h1>
                <p className='text-muted-foreground text-lg md:text-xl'>
                    Streamline your domain registration. Instantly generate a professional cover letter for your .np domain request.
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
                {/* Inputs Section */}
                <div className='bg-card border rounded-xl shadow-sm p-6 md:p-8 space-y-6'>
                    <div className='border-b pb-4 mb-4'>
                        <h2 className='text-xl font-semibold flex items-center gap-2'>
                            <FileText className='w-5 h-5 text-primary' />
                            Details
                        </h2>
                        <p className='text-sm text-muted-foreground'>Fill in the details to populate the letter.</p>
                    </div>

                    <div className='space-y-4'>
                        <div>
                            <label htmlFor="domain" className="block text-sm font-medium mb-1.5">Domain Name</label>
                            <input
                                type="text"
                                id="domain"
                                placeholder="example.com.np"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                            />
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                             <div>
                                <label htmlFor="primary" className="block text-sm font-medium mb-1.5">Primary Name Server</label>
                                <input
                                    type="text"
                                    id="primary"
                                    placeholder="ns1.example.com"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={primary}
                                    onChange={(e) => setPrimary(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="secondary" className="block text-sm font-medium mb-1.5">Secondary Name Server</label>
                                <input
                                    type="text"
                                    id="secondary"
                                    placeholder="ns2.example.com"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={secondary}
                                    onChange={(e) => setSecondary(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1.5">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="First Last"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium mb-1.5">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="City, Country"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                     <div className='pt-4 flex flex-col sm:flex-row gap-3'>
                        <Button onClick={downloadImage} className='flex-1 gap-2' variant="outline">
                            <ImageIcon className="w-4 h-4" /> Download as Image
                        </Button>
                        <Button onClick={downloadPDF} className='flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90'>
                             <Download className="w-4 h-4" /> Download as PDF
                        </Button>
                    </div>
                </div>

                {/* Preview Section */}
                <div className='flex flex-col gap-4'>
                     <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-semibold'>Live Preview</h2>
                         <span className='text-xs text-muted-foreground max-sm:hidden'>Real-time rendering of your letter</span>
                     </div>
                    
                    <div className='overflow-x-auto pb-4 md:pb-0'>
                        {/* A4 Aspect Ratio Container */}
                        <div className='min-w-[700px] md:min-w-0 md:w-full bg-white text-black shadow-lg border rounded-sm mx-auto' style={{ aspectRatio: '1 / 1.414' }}> 
                            <div className='p-12 md:p-16 h-full flex flex-col text-sm md:text-base leading-relaxed' ref={sectionRef} id='section-to-download'>
                                <div className='mb-8 text-right'>
                                    <p>Date: {currentDate}</p>
                                </div>

                                <div className='mb-8 space-y-1'>
                                    <p>To,</p>
                                    <p className='font-semibold'>The Hostmaster</p>
                                    <p>Mercantile Communication Pvt. Ltd</p>
                                    <p>Durbar Marg, Kathmandu</p>
                                </div>

                                <div className='mb-8 font-bold text-center underline underline-offset-4'>
                                    Subject: NP Domain Registration
                                </div>

                                <div className='mb-4'>
                                    <p>Dear Sir/Madam,</p>
                                </div>

                                <div className='mb-8 text-justify'>
                                    <p>
                                        I am writing this letter to request you to kindly register <span className='font-bold'>{domain || '[Domain Name]'}</span> for me based on my name. 
                                        I have provided my personal details, and also attached a scanned copy of my citizenship with this letter. 
                                        I would be very glad if you approve my domain registration request.
                                    </p>
                                </div>
                                
                                <div className='mb-8'>
                                    <p>Thank you very much for your consideration. I look forward to hearing from you soon.</p>
                                </div>

                                <div className='mb-12 space-y-2 bg-gray-50/50 p-4 border border-dashed border-gray-200 rounded-lg'>
                                    <p><span className='font-semibold'>Domain name:</span> {domain || '____________________'}</p>
                                    <p><span className='font-semibold'>Primary Name Server:</span> {primary || '____________________'}</p>
                                    <p><span className='font-semibold'>Secondary Name Server:</span> {secondary || '____________________'}</p>
                                </div>

                                <div className='mt-auto space-y-1'>
                                    <p>Yours Sincerely,</p>
                                    <div className='mt-8 pt-4 border-t border-gray-300 w-48'></div>
                                    <p><span className='font-semibold'>Name:</span> {name || '____________________'}</p>
                                    <p><span className='font-semibold'>Address:</span> {address || '____________________'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-xs text-center text-muted-foreground md:hidden'>Scroll horizontally to see full document</p>
                </div>
            </div>
        </div>
    )
}

export default CoverForm

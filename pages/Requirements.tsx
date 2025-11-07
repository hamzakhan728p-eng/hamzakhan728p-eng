
import React, { useState } from 'react';

const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div>
        <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-blue-600 text-white">
          {number}
        </div>
      </div>
      <div className="w-px h-full bg-gray-300"></div>
    </div>
    <div className="pb-8">
      <p className="mb-2 text-xl font-bold">{title}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default function Requirements() {
  const [fileName, setFileName] = useState('');
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for submitting your requirements. Our team will review your information and send a custom proposal within 24 hours.');
    (e.target as HTMLFormElement).reset();
    setFileName('');
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Ready to Outsource Your Billing?</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Let's get started. Provide us with some details about your practice, and we'll create a custom, no-obligation proposal for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Practice Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="practiceName" className="block text-sm font-medium text-gray-700">Practice Name</label>
                  <input type="text" name="practiceName" id="practiceName" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="npi" className="block text-sm font-medium text-gray-700">NPI Number</label>
                  <input type="text" name="npi" id="npi" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Practice Address</label>
                <input type="text" name="address" id="address" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="providers" className="block text-sm font-medium text-gray-700">Number of Providers / Specialties</label>
                  <input type="text" name="providers" id="providers" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="software" className="block text-sm font-medium text-gray-700">Current Medical Billing Software</label>
                  <input type="text" name="software" id="software" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="claimsVolume" className="block text-sm font-medium text-gray-700">Average Monthly Claims Volume</label>
                  <input type="number" name="claimsVolume" id="claimsVolume" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="collectionRate" className="block text-sm font-medium text-gray-700">Current Collection Rate (%)</label>
                  <input type="number" step="0.1" name="collectionRate" id="collectionRate" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload Documents (Optional)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">Sample claims, AR reports, rate sheets up to 10MB</p>
                    {fileName && <p className="text-sm text-green-600 mt-2">{fileName}</p>}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Additional Comments</label>
                <textarea name="comments" id="comments" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Submit for a Custom Proposal
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                <ProcessStep number={1} title="Submit Your Details" description="Fill out the form with your practice's information. The more details you provide, the more accurate your proposal will be."/>
                <ProcessStep number={2} title="We Review" description="Our experts analyze your submission within 24 business hours to understand your specific needs and challenges."/>
                <ProcessStep number={3} title="Custom Proposal Sent" description="You'll receive a detailed, transparent proposal outlining our services, pricing, and the expected impact on your revenue."/>
                <ProcessStep number={4} title="Free Onboarding Call" description="We schedule a call to walk you through the proposal, answer your questions, and plan the seamless transition."/>
                <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                        <div><div className="flex items-center justify-center w-10 h-10 border rounded-full bg-blue-600 text-white">5</div></div>
                    </div>
                    <div className="pb-8"><p className="mb-2 text-xl font-bold">Start Service</p><p className="text-gray-700">Once you approve, we begin the onboarding process and start improving your revenue cycle immediately.</p></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

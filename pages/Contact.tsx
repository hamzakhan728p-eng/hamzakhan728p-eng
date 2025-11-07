
import React from 'react';

const ContactInfoCard = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) => {
  const content = href ? <a href={href} className="hover:text-blue-500 break-all">{value}</a> : <span className="break-all">{value}</span>;
  return (
    <div className="flex items-start p-4">
      <div className="flex-shrink-0 text-blue-600 w-8 h-8">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};


export default function Contact() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message. An RCM expert will contact you shortly!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We're here to answer your questions. Reach out to us through any of the methods below, or fill out the form and we'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <ContactInfoCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                title="Primary Email"
                value="rcm.solution.experts@gmail.com"
                href="mailto:rcm.solution.experts@gmail.com"
              />
              <ContactInfoCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                title="Business Phone"
                value="(555) 123-4567"
                href="tel:5551234567"
              />
               <ContactInfoCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="Working Hours"
                value="Monday-Friday, 9:00 AM - 6:00 PM EST"
              />
               <ContactInfoCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Location"
                value="Virtual Services - Proudly serving clients across the USA"
              />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                 <div>
                  <label htmlFor="practiceName" className="block text-sm font-medium text-gray-700">Practice Name</label>
                  <input type="text" name="practiceName" id="practiceName" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" id="phone" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows={5} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

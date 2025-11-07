
import React, { useState } from 'react';

type FormData = {
  service: string;
  name: string;
  practiceName: string;
  email: string;
  phone: string;
  providerCount: string;
  claimsVolume: string;
  currentSoftware: string;
  challenges: string;
};

export default function Booking() {
  const [formData, setFormData] = useState<FormData>({
    service: 'Free 30-minute Consultation',
    name: '',
    practiceName: '',
    email: '',
    phone: '',
    providerCount: '',
    claimsVolume: '',
    currentSoftware: '',
    challenges: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
    alert(`Thank you, ${formData.name}! Your request for a "${formData.service}" has been received. We will contact you at ${formData.email} to confirm the details.`);
    // Reset form
    setFormData({
      service: 'Free 30-minute Consultation',
      name: '',
      practiceName: '',
      email: '',
      phone: '',
      providerCount: '',
      claimsVolume: '',
      currentSoftware: '',
      challenges: '',
    });
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-600">Book Your Appointment</h1>
            <p className="mt-4 text-gray-600">
              Schedule a time with our RCM experts to discuss your practice's needs. Available Monday-Friday, 9 AM - 6 PM EST.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Type</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>Free 30-minute Consultation</option>
                <option>Practice Billing Audit</option>
                <option>Full Service Onboarding Call</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="practiceName" className="block text-sm font-medium text-gray-700">Practice Name</label>
                <input type="text" name="practiceName" id="practiceName" required value={formData.practiceName} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
               <div>
                <label htmlFor="providerCount" className="block text-sm font-medium text-gray-700">Number of Providers</label>
                <input type="number" name="providerCount" id="providerCount" required value={formData.providerCount} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
               <div>
                <label htmlFor="claimsVolume" className="block text-sm font-medium text-gray-700">Current Monthly Claims Volume</label>
                <input type="number" name="claimsVolume" id="claimsVolume" required value={formData.claimsVolume} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label htmlFor="currentSoftware" className="block text-sm font-medium text-gray-700">Current EMR/Billing Software Used</label>
              <input type="text" name="currentSoftware" id="currentSoftware" value={formData.currentSoftware} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            
            <div>
              <label htmlFor="challenges" className="block text-sm font-medium text-gray-700">Specific Challenges / Requirements</label>
              <textarea name="challenges" id="challenges" rows={4} value={formData.challenges} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., high denial rate, slow payments, AR backlog..."></textarea>
            </div>
            
            <div className="text-center pt-4">
              <button type="submit" className="inline-flex justify-center py-3 px-12 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Request Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

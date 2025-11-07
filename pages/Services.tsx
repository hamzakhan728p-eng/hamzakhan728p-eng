
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start space-x-4 p-4">
    <div className="flex-shrink-0 text-blue-600">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const PricingCard = ({ title, price, features, isFeatured }: { title: string, price: string, features: string[], isFeatured?: boolean }) => (
  <div className={`border rounded-lg p-8 text-center flex flex-col ${isFeatured ? 'border-blue-600 scale-105 shadow-2xl bg-white' : 'border-gray-300 bg-gray-50'}`}>
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-4xl font-extrabold text-blue-600 my-4">{price}</p>
    <p className="text-gray-500 mb-6">{isFeatured ? 'of monthly collections' : ''}</p>
    <ul className="space-y-2 text-gray-600 text-left mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/contact" className={`w-full mt-auto py-3 px-6 rounded-lg font-semibold transition-colors ${isFeatured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'}`}>
      Contact Us
    </Link>
  </div>
);

export default function Services() {
  const services = [
    { title: "Patient Registration & Insurance Verification", description: "Accurate data entry and pre-authorization checks to ensure clean claim submission from the start." },
    { title: "Medical Coding (CPT, ICD-10, HCPCS)", description: "Certified coders ensure maximum reimbursement and full compliance with all coding regulations." },
    { title: "Charge Entry & Claims Submission", description: "Meticulous charge entry and prompt electronic submission to all payers for faster processing." },
    { title: "Payment Posting (ERA/EOB)", description: "Timely and accurate posting of payments from Electronic Remittance Advice (ERA) and Explanation of Benefits (EOB)." },
    { title: "Accounts Receivable (AR) Management", description: "Proactive follow-up on unpaid claims, reducing AR days and improving your practice's cash flow." },
    { title: "Denial Management & Appeals", description: "Expert analysis of denials, systematic appeals process, and root cause analysis to prevent future denials." },
    { title: "Reporting & Analytics Dashboard", description: "Customizable reports providing actionable insights into your practice's financial performance." },
    { title: "Provider Credentialing Services", description: "Managing the entire credentialing process with insurance networks to ensure your providers are properly enrolled." }
  ];

  const icon = <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h4v5h-4z" /></svg>;

  return (
    <>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Complete Revenue Cycle Management Solutions</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-blue-100">
            From patient registration to final payment, we manage every step of your revenue cycle with precision and expertise, allowing you to focus on what matters most—your patients.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map(service => (
              <ServiceDetailCard key={service.title} icon={icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Transparent & Affordable Pricing</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Simple, collection-based pricing that aligns with your success. No setup fees, no hidden costs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <PricingCard 
              title="Small Practices"
              price="4-6%"
              features={["1-3 Providers", "Full RCM Suite", "Dedicated Account Manager", "Monthly Performance Reports", "24/7 Support"]}
              isFeatured={false}
            />
             <PricingCard 
              title="Medium Practices"
              price="Custom Quote"
              features={["4-10 Providers", "All Small Practice Features +", "Customized Reporting", "Advanced Analytics", "Quarterly Business Reviews", "Priority Support"]}
              isFeatured={true}
            />
             <PricingCard 
              title="Large Groups & Hospitals"
              price="Dedicated Team"
              features={[">10 Providers", "All Medium Practice Features +", "Fully Dedicated Billing Team", "On-site Consultation Available", "Custom Workflow Integration", "Enterprise-level Reporting"]}
              isFeatured={false}
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-lg font-semibold">No setup fees, 30-day risk-free trial available on all plans!</p>
            <Link to="/requirements" className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Get Your Custom Quote Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

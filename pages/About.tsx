
import React from 'react';

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold text-blue-600 mb-4">{title}</h3>
    <div className="space-y-4 text-gray-600">{children}</div>
  </div>
);

export default function About() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Your Partner in Practice Profitability</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            With over a decade of dedicated expertise in Revenue Cycle Management, we empower healthcare providers across the US to achieve financial clarity and operational efficiency.
          </p>
        </div>
      </section>
      
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/800/600?image=35" alt="Healthcare professionals collaborating" className="rounded-lg shadow-xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-2xl italic text-blue-600">
              "Helping healthcare providers focus on patients, not paperwork."
            </p>
            <p className="mt-4 text-gray-600">
              We founded RCM Solutions Experts with a single goal: to lift the administrative burden of medical billing from the shoulders of physicians, clinics, and hospitals. We believe that by providing expert, affordable, and transparent RCM services, we enable our clients to dedicate their full attention to delivering exceptional patient care.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InfoCard title="HIPAA Compliance & Data Security">
            <p>
              We treat your data with the utmost seriousness. Our entire infrastructure is built on a foundation of security and compliance.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Strict HIPAA Adherence:</strong> All team members undergo rigorous, continuous training on HIPAA regulations.</li>
              <li><strong>256-bit Encryption:</strong> All data, both in transit and at rest, is protected with bank-grade encryption.</li>
              <li><strong>Secure Servers:</strong> We utilize secure, access-controlled data centers located within the United States.</li>
              <li><strong>Regular Audits:</strong> Our systems undergo regular security audits to ensure we are protected against emerging threats.</li>
            </ul>
          </InfoCard>
          <InfoCard title="Team & Expertise">
             <p>
              Our strength lies in our people. The RCM Solutions Experts team is composed of industry veterans with a deep understanding of the US healthcare system.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Certified Professionals:</strong> Our team includes certified coders (CPC), billers, and compliance officers.</li>
              <li><strong>Multi-Specialty Experience:</strong> We have extensive experience across a wide range of medical specialties, ensuring accurate coding and billing for your specific services.</li>
              <li><strong>US Healthcare Focus:</strong> We specialize exclusively in the US healthcare market, staying current with the latest regulations from CMS, Medicare, and commercial payers.</li>
              <li><strong>Continuous Education:</strong> We invest in ongoing education to keep our team ahead of industry changes and payer policy updates.</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </>
  );
}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Reusable Components defined outside Home to prevent re-renders ---

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-center items-center mb-4 text-blue-600">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StatCard = ({ value, label }: { value: string, label: string }) => (
  <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-center">
    <p className="text-4xl font-bold">{value}</p>
    <p className="mt-2 text-blue-100">{label}</p>
  </div>
);

const TestimonialCard = ({ quote, author, practice }: { quote: string, author: string, practice: string }) => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-md mx-auto max-w-2xl">
    <p className="text-lg italic text-gray-700 mb-4">"{quote}"</p>
    <p className="font-semibold text-right text-blue-600">{author}</p>
    <p className="text-sm text-right text-gray-500">{practice}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-4 px-2 flex justify-between items-center hover:bg-gray-50">
        <span className="font-semibold">{question}</span>
        <span className="text-xl text-blue-600">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-4 bg-white text-gray-600"><p>{answer}</p></div>}
    </div>
  );
};


// --- Main Home Page Component ---

export default function Home() {

  const testimonials = [
    { quote: "RCM Solutions Experts transformed our billing process. Our collection rate is up by 15% and the team is always responsive. A true partner!", author: "Dr. Jane Doe", practice: "Family Care Clinic" },
    { quote: "Switching to RCMSE was the best decision for our practice. They cut our billing costs by nearly 30% and improved our claim success rate significantly.", author: "John Smith", practice: "Ortho Associates" },
    { quote: "The level of detail and reporting they provide is outstanding. We finally have a clear picture of our financial health. Highly recommended.", author: "Dr. Emily White", practice: "Cardiology Partners" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32" style={{ backgroundImage: "url('https://picsum.photos/1600/800?image=23')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Maximize Your Revenue, Minimize Your Hassle</h1>
          <p className="mt-4 text-lg md:text-2xl font-light">Professional Medical Billing Services at Affordable Rates</p>
          <div className="mt-8 space-x-0 space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/booking" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Book Free Consultation
            </Link>
            <Link to="/requirements" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
      
      {/* Social Proof Bar */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                    <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                    <p className="text-gray-600">Trusted Practices</p>
                </div>
                <div className="p-4">
                    <h3 className="text-3xl font-bold text-blue-600">5M+</h3>
                    <p className="text-gray-600">Claims Processed</p>
                </div>
                <div className="p-4">
                    <h3 className="text-3xl font-bold text-blue-600">30-Day</h3>
                    <p className="text-gray-600">Average Payment Improvement</p>
                </div>
            </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h5V4H4zm0 12h5v-5H4v5zm12 0h5v-5h-5v5zM16 4v5h5V4h-5z" /></svg>} title="Complete RCM Cycle" description="End-to-end management of your revenue cycle for optimal financial performance." />
            <ServiceCard icon={<svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Insurance Verification" description="Proactive verification to reduce claim denials and ensure timely payments." />
            <ServiceCard icon={<svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" /></svg>} title="Claims Management" description="Efficient submission and follow-up on all claims to accelerate your cash flow." />
            <ServiceCard icon={<svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} title="AR & Denial Management" description="Aggressive pursuit of aged receivables and expert handling of denied claims." />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose RCM Solutions Experts?</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We're not just a vendor, we're your partner in financial success. Our expertise and dedication deliver measurable results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="95%" label="Claim Success Rate" />
            <StatCard value="HIPAA" label="Compliant & Secure" />
            <StatCard value="30%" label="Average Cost Savings" />
            <StatCard value="24/7" label="Dedicated Support" />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="relative">
            <TestimonialCard {...testimonials[currentTestimonial]} />
            <button onClick={prevTestimonial} className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextTestimonial} className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="bg-gray-50 rounded-lg shadow-sm">
            <FaqItem
              question="How cost-effective are your services?"
              answer="Our clients typically save up to 30% on their in-house billing costs. Our streamlined processes and expert team reduce overhead, minimize errors, and improve collection rates, leading to significant net savings for your practice."
            />
            <FaqItem
              question="Are you HIPAA compliant?"
              answer="Absolutely. We adhere to the strictest HIPAA guidelines. All our systems and processes are designed for maximum data security and confidentiality, protected by 256-bit encryption and secure servers."
            />
             <FaqItem
              question="What is your implementation timeline?"
              answer="We can typically get a new practice fully onboarded and operational within 7-14 business days. The process includes a kick-off call, system integration, and a review of your current processes to ensure a seamless transition."
            />
             <FaqItem
              question="Do you work with our existing EMR/EHR software?"
              answer="Yes, our team has experience with a wide range of EMR/EHR and practice management systems. We can integrate directly with most major platforms to ensure a smooth workflow with no disruption to your clinical operations."
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold">Ready to Improve Your Bottom Line?</h2>
                <p className="mt-4 text-blue-100">Contact our experts today for a free, no-obligation analysis of your current billing process. Let us show you how much you can save and earn.</p>
                <div className="mt-6 space-y-2">
                    <p className="font-semibold">"Limited slots available this week - Book now!"</p>
                    <p>"Schedule by Friday and get a free billing audit."</p>
                </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-2xl text-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                    <input type="text" placeholder="Your Name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Your Email" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="tel" placeholder="Your Phone" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea placeholder="Your Message" rows={4} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
}

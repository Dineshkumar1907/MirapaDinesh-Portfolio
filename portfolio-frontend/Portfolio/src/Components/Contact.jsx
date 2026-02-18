import React, { useState } from 'react';

const Contact = () => {
  // 1. State for all 4 backend fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // 2. Logic to handle typing (matches ID to formData keys)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // 3. Send to Spring Boot (Port 5173 to 8080)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:8081/api/contact/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message Sent! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatus('Failed to send. Please check your backend.');
      }
    } catch (error) {
      console.error("Connection Error:", error);
      setStatus('Server error. Is the backend running?');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white py-20 mt-30">
      <div className="w-full max-w-xl px-4">
        {/* Heading */}
        <h1 className="text-center playfair font-bold text-5xl text-black underline decoration-[#2E71FE] underline-offset-8 mb-12 max-sm:text-3xl" data-aos="fade-up">
          Contact
        </h1>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-8" data-aos="fade-up">
          
          {/* Name Input Block */}
          <div className="relative w-full" >
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="peer h-14 w-full rounded-xl border border-gray-200 bg-white px-4 pt-2 text-gray-900 placeholder-transparent focus:border-[#2E71FE] focus:outline-none transition-all shadow-sm"
            />
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 
                          peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#2E71FE] peer-focus:bg-white peer-focus:px-2 
                          ${formData.name ? '-top-2.5 left-3 text-xs text-[#2E71FE] bg-white px-2' : 'top-4 text-base'}`}
            >
              Full Name
            </label>
          </div>

          {/* Email Input Block */}
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="peer h-14 w-full rounded-xl border border-gray-200 bg-white px-4 pt-2 text-gray-900 placeholder-transparent focus:border-[#2E71FE] focus:outline-none transition-all shadow-sm"
            />
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 
                          peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#2E71FE] peer-focus:bg-white peer-focus:px-2 
                          ${formData.email ? '-top-2.5 left-3 text-xs text-[#2E71FE] bg-white px-2' : 'top-4 text-base'}`}
            >
              Email Address
            </label>
          </div>

          {/* Subject Input Block */}
          <div className="relative w-full">
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="peer h-14 w-full rounded-xl border border-gray-200 bg-white px-4 pt-2 text-gray-900 placeholder-transparent focus:border-[#2E71FE] focus:outline-none transition-all shadow-sm"
            />
            <label
              htmlFor="subject"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 
                          peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#2E71FE] peer-focus:bg-white peer-focus:px-2 
                          ${formData.subject ? '-top-2.5 left-3 text-xs text-[#2E71FE] bg-white px-2' : 'top-4 text-base'}`}
            >
              Subject
            </label>
          </div>

          {/* Message Input Block (REQUIRED for Backend) */}
          <div className="relative w-full">
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="peer min-h-16 w-full rounded-xl border border-gray-200 bg-white px-4 pt-4 text-gray-900 placeholder-transparent focus:border-[#2E71FE] focus:outline-none transition-all shadow-sm"
            />
            <label
              htmlFor="message"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 
                          peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#2E71FE] peer-focus:bg-white peer-focus:px-2 
                          ${formData.message ? '-top-2.5 left-3 text-xs text-[#2E71FE] bg-white px-2' : 'top-4 text-base'}`}
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#2E71FE] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-600 active:scale-95 transition-all duration-200 poppins"
          >
            Submit Message
          </button>

          {/* Status Notification */}
          {status && <p className="text-center text-[#2E71FE] font-medium">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

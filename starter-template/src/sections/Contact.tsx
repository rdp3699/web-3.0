'use client';
import React from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';



export const ContactSection = ({ id }: { id: string }) => {

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id={id} className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})`, }}></div>
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-16">
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Let's Create something amazing together</h2>
              <p className='text-sm mt-2 md:text-base'>Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.</p>
            </div>
            <div>
              <Card className="w-full max-w-md p-6 relative bg-gray-900 z-50 lg:min-w-[27rem]">
                <CardHeader
                  title="Contact Me"
                  description=""
                  className='text-white -ml-10'
                />
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-8">
                  <input
                    type="text"
                     name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-white text-gray-900 font-bold py-2 inline-flex items-center gap-3 px-6 h-12 rounded-xl hover:bg-gray-400 transition"
                  >
                    <span className='font-semibold'>{status === 'loading' ? 'Sending...' : 'Send Message'} </span>
                    <ArrowUpRightIcon className='size-4' />
                  </button>
                  {status === 'success' && (
                  <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm text-center">Failed to send message. Please try again.</p>
                )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
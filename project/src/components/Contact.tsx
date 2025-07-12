import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdMessage } from 'react-icons/md';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';

// Validate environment variables
const validateEnvVariables = () => {
  const missingVars = [];
  if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
  if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') missingVars.push('VITE_EMAILJS_SERVICE_ID');
  if (!EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
  
  if (missingVars.length > 0) {
    console.error(`Missing EmailJS environment variables: ${missingVars.join(', ')}`);
    return false;
  }
  return true;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isEmailJSReady, setIsEmailJSReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize EmailJS and validate environment variables
  useEffect(() => {
    const initEmailJS = async () => {
      const isEnvValid = validateEnvVariables();
      if (isEnvValid) {
        try {
          await emailjs.init(EMAILJS_PUBLIC_KEY);
          setIsEmailJSReady(true);
          setErrorMessage(null);
        } catch (error) {
          console.error('Failed to initialize EmailJS:', error);
          setErrorMessage('Email service initialization failed. Please try again later.');
        }
      } else {
        setErrorMessage('Email service configuration is missing. Please check your environment variables.');
      }
    };

    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      
      // Validate form data
      const formData = new FormData(formRef.current);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const subject = formData.get('subject') as string;
      const message = formData.get('message') as string;
      
      if (!name || !email || !subject || !message) {
        throw new Error('All fields are required');
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address');
      }
      
      if (!isEmailJSReady) {
        throw new Error('Email service is not ready. Please try again later.');
      }
      
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative">
      {/* Background Effects - Updated to match hero theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-maroon/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Content remains the same */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">Get In Touch</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information - Updated styling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl space-y-6 sm:space-y-8 hover:border-maroon/30 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-white">Let's Connect</h3>
              
              {[
                {
                  icon: MdEmail,
                  label: 'Email',
                  value: 'abhisheksen789bd@gmail.com',
                  gradient: 'from-maroon/20 to-maroon/5',
                  href: 'mailto:abhisheksen789bd@gmail.com'
                },
                {
                  icon: MdPhone,
                  label: 'Phone',
                  value: '91+ 9691749458',
                  gradient: 'from-maroon/20 to-maroon/5',
                  href: 'tel:+919691749458'
                },
                {
                  icon: MdLocationOn,
                  label: 'Location',
                  value: 'Indore, MP',
                  gradient: 'from-maroon/20 to-maroon/5',
                  href: '#'
                }
              ].map(({ icon: Icon, label, value, gradient, href }) => (
                <div key={label} className="flex items-center gap-4 sm:gap-6">
                  <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${gradient} backdrop-blur-xl`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/60 mb-0.5 sm:mb-1">{label}</p>
                    <a 
                      href={href} 
                      className="text-base sm:text-lg text-white break-all hover:text-[#FF6B6B] transition-colors"
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - Updated styling */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6 transition-all duration-300"
              noValidate
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-white">Send Message</h3>
              
              {/* Form fields - Updated styling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-2 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full   rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors"
                    required
                    minLength={2}
                    maxLength={50}
                    aria-label="Your name"
                  />
                </div>
                
                {/* Repeat similar styling for other form fields */}
                <div>
                  <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full   rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors"
                    required
                    aria-label="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full   rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors"
                  required
                  minLength={3}
                  maxLength={100}
                  aria-label="Subject"
                />
              </div>
              
              <div>
                <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full   rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors"
                  required
                  minLength={10}
                  maxLength={1000}
                  aria-label="Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-maroon to-maroon/80 text-white rounded-full py-3 px-8 font-semibold flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-maroon/25 transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                aria-label="Send message"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <MdSend size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status messages - Updated styling */}
              {submitStatus === 'success' && (
                <p className="text-green-400 text-xs sm:text-sm text-center mt-3 sm:mt-4">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-xs sm:text-sm text-center mt-3 sm:mt-4">
                  {errorMessage || 'Failed to send message. Please try again.'}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

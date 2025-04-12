import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdMessage } from 'react-icons/md';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Validate environment variables
const validateEnvVariables = () => {
  const missingVars = [];
  if (!EMAILJS_PUBLIC_KEY) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
  if (!EMAILJS_SERVICE_ID) missingVars.push('VITE_EMAILJS_SERVICE_ID');
  if (!EMAILJS_TEMPLATE_ID) missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
  
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
    const isEnvValid = validateEnvVariables();
    if (isEnvValid) {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        setIsEmailJSReady(true);
      } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
        setErrorMessage('Email service initialization failed. Please try again later.');
      }
    } else {
      setErrorMessage('Email service configuration is missing. Please contact the administrator.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!isEmailJSReady) {
      setSubmitStatus('error');
      setErrorMessage('Email service is not ready. Please try again later.');
      return;
    }

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
      // Reset status after 5 seconds
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage(null);
      }, 5000);
      
      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] bg-maroon/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="glass-effect p-6 sm:p-8 rounded-2xl space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Let's Connect</h3>
              
              {[
                {
                  icon: MdEmail,
                  label: 'Email',
                  value: 'abhisheksen789bd@gmail.com',
                  gradient: 'from-blue-500/20 to-blue-500/5',
                  href: 'mailto:abhisheksen789bd@gmail.com'
                },
                {
                  icon: MdPhone,
                  label: 'Phone',
                  value: '91+ 9691749458',
                  gradient: 'from-green-500/20 to-green-500/5',
                  href: 'tel:+919691749458'
                },
                {
                  icon: MdLocationOn,
                  label: 'Location',
                  value: 'Indore, MP',
                  gradient: 'from-purple-500/20 to-purple-500/5',
                  href: '#'
                },
                {
                  icon: MdMessage,
                  label: 'Social',
                  value: '@johndoe',
                  gradient: 'from-yellow-500/20 to-yellow-500/5',
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="glass-effect p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6"
              noValidate
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Send Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="contact-input text-sm sm:text-base"
                    required
                    minLength={2}
                    maxLength={50}
                    aria-label="Your name"
                  />
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="contact-input text-sm sm:text-base"
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
                  className="contact-input text-sm sm:text-base"
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
                  className="contact-input resize-none text-sm sm:text-base"
                  required
                  minLength={10}
                  maxLength={1000}
                  aria-label="Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !isEmailJSReady}
                className={`button-glow w-full flex items-center justify-center gap-2 group py-2.5 sm:py-3 text-sm sm:text-base ${
                  (isSubmitting || !isEmailJSReady) ? 'opacity-70 cursor-not-allowed' : ''
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
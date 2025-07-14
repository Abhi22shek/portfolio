import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdMessage } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

// Validation schema
const contactSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  subject: yup
    .string()
    .required('Subject is required')
    .min(3, 'Subject must be at least 3 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

type ContactFormData = yup.InferType<typeof contactSchema>;

// Initialize EmailJS with your public key
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isEmailJSReady, setIsEmailJSReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    mode: 'onBlur'
  });

  // Initialize EmailJS and validate environment variables
  useEffect(() => {
    initEmailJS();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      
      if (!isEmailJSReady) {
        throw new Error('Email service is not ready. Please try again later.');
      }
      
      // Create a temporary form element for emailjs
      const tempForm = document.createElement('form');
      Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.name = key;
        input.value = value;
        tempForm.appendChild(input);
      });
      
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        tempForm,
        EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Contact Form - Updated styling */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6 transition-all duration-300"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-2 block">Your Name</label>
              <input
                {...register('name')}
                placeholder="John Doe"
                className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors ${
                  errors.name ? 'border-red-500' : 'border-white/20'
                }`}
                aria-label="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Your Email</label>
              <input
                {...register('email')}
                placeholder="john@example.com"
                className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-white/20'
                }`}
                aria-label="Your email"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Subject</label>
            <input
              {...register('subject')}
              placeholder="Project Inquiry"
              className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors ${
                errors.subject ? 'border-red-500' : 'border-white/20'
              }`}
              aria-label="Subject"
            />
            {errors.subject && (
              <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
            )}
          </div>
          
          <div>
            <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Message</label>
            <textarea
              {...register('message')}
              placeholder="Your message here..."
              rows={4}
              className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-white/20'
              }`}
              aria-label="Message"
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-maroon hover:bg-maroon/90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">⏳</span>
                Sending...
              </>
            ) : (
              <>
                <MdSend className="text-lg" />
                Send Message
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
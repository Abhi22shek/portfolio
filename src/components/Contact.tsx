@@ .. @@
 import React, { useRef, useState, useEffect } from 'react';
 import { motion } from 'framer-motion';
 import { MdEmail, MdPhone, MdLocationOn, MdSend, MdMessage } from 'react-icons/md';
+import { useForm } from 'react-hook-form';
+import { yupResolver } from '@hookform/resolvers/yup';
+import * as yup from 'yup';
 import emailjs from '@emailjs/browser';

+// Validation schema
+const contactSchema = yup.object({
+  name: yup
+    .string()
+    .required('Name is required')
+    .min(2, 'Name must be at least 2 characters')
+    .max(50, 'Name must be less than 50 characters'),
+  email: yup
+    .string()
+    .required('Email is required')
+    .email('Please enter a valid email address'),
+  subject: yup
+    .string()
+    .required('Subject is required')
+    .min(3, 'Subject must be at least 3 characters')
+    .max(100, 'Subject must be less than 100 characters'),
+  message: yup
+    .string()
+    .required('Message is required')
+    .min(10, 'Message must be at least 10 characters')
+    .max(1000, 'Message must be less than 1000 characters'),
+});
+
+type ContactFormData = yup.InferType<typeof contactSchema>;
+
 // Initialize EmailJS with your public key
@@ .. @@
 const Contact = () => {
-  const formRef = useRef<HTMLFormElement>(null);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
   const [isEmailJSReady, setIsEmailJSReady] = useState(false);
   const [errorMessage, setErrorMessage] = useState<string | null>(null);

+  // React Hook Form setup
+  const {
+    register,
+    handleSubmit,
+    formState: { errors },
+    reset
+  } = useForm<ContactFormData>({
+    resolver: yupResolver(contactSchema),
+    mode: 'onBlur'
+  });
+
   // Initialize EmailJS and validate environment variables
@@ .. @@
     initEmailJS();
   }, []);

-  const handleSubmit = async (e: React.FormEvent) => {
-    e.preventDefault();
-    if (!formRef.current) return;
-    
+  const onSubmit = async (data: ContactFormData) => {
     try {
       setIsSubmitting(true);
       setErrorMessage(null);
       
-      // Validate form data
-      const formData = new FormData(formRef.current);
-      const name = formData.get('name') as string;
-      const email = formData.get('email') as string;
-      const subject = formData.get('subject') as string;
-      const message = formData.get('message') as string;
-      
-      if (!name || !email || !subject || !message) {
-        throw new Error('All fields are required');
-      }
-      
-      // Email validation
-      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
-      if (!emailRegex.test(email)) {
-        throw new Error('Please enter a valid email address');
-      }
-      
       if (!isEmailJSReady) {
         throw new Error('Email service is not ready. Please try again later.');
       }
       
-      await emailjs.sendForm(
+      // Create a temporary form element for emailjs
+      const tempForm = document.createElement('form');
+      Object.entries(data).forEach(([key, value]) => {
+        const input = document.createElement('input');
+        input.name = key;
+        input.value = value;
+        tempForm.appendChild(input);
+      });
+      
+      await emailjs.sendForm(
         EMAILJS_SERVICE_ID,
         EMAILJS_TEMPLATE_ID,
-        formRef.current,
+        tempForm,
         EMAILJS_PUBLIC_KEY
       );
       
       setSubmitStatus('success');
-      formRef.current.reset();
+      reset();
     } catch (error) {
       console.error('Error sending email:', error);
       setSubmitStatus('error');
@@ .. @@
           {/* Contact Form - Updated styling */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
-            <form 
-              ref={formRef} 
-              onSubmit={handleSubmit} 
+            <form 
+              onSubmit={handleSubmit(onSubmit)} 
               className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6 transition-all duration-300"
               noValidate
             >
@@ .. @@
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                 <div>
                   <label className="text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-2 block">Your Name</label>
                   <input
-                    type="text"
-                    name="name"
+                    {...register('name')}
                     placeholder="John Doe"
-                    className="w-full   rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors"
-                    required
-                    minLength={2}
-                    maxLength={50}
+                    className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors ${
+                      errors.name ? 'border-red-500' : 'border-white/20'
+                    }`}
                     aria-label="Your name"
                   />
+                  {errors.name && (
+                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
+                  )}
                 </div>
                 
-                {/* Repeat similar styling for other form fields */}
                 <div>
                   <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Your Email</label>
                   <input
-                    type="email"
-                    name="email"
+                    {...register('email')}
                     placeholder="john@example.com"
-                    className="w-full   rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors"
-                    required
+                    className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors ${
+                      errors.email ? 'border-red-500' : 'border-white/20'
+                    }`}
                     aria-label="Your email"
                   />
+                  {errors.email && (
+                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
+                  )}
                 </div>
               </div>
               
               <div>
                 <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Subject</label>
                 <input
-                  type="text"
-                  name="subject"
+                  {...register('subject')}
                   placeholder="Project Inquiry"
-                  className="w-full   rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors"
-                  required
-                  minLength={3}
-                  maxLength={100}
+                  className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors ${
+                    errors.subject ? 'border-red-500' : 'border-white/20'
+                  }`}
                   aria-label="Subject"
                 />
+                {errors.subject && (
+                  <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
+                )}
               </div>
               
               <div>
                 <label className="text-xs sm:text-sm text-white/60 mb-1.5 sm:mb-2 block">Message</label>
                 <textarea
-                  name="message"
+                  {...register('message')}
                   placeholder="Your message here..."
                   rows={4}
-                  className="w-full   rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors"
-                  required
-                  minLength={10}
-                  maxLength={1000}
+                  className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-maroon/50 focus:outline-none focus:ring-1 focus:ring-maroon/50 transition-colors resize-none ${
+                    errors.message ? 'border-red-500' : 'border-white/20'
+                  }`}
                   aria-label="Message"
-                ></textarea>
+                />
+                {errors.message && (
+                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
+                )}
               </div>
               
               <button
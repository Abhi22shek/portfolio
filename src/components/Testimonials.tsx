import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-maroon/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What People Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Testimonials from clients and colleagues I've had the pleasure to work with.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 hover:border-maroon/30 transition-all duration-300 mx-4">
                  <div className="text-center">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="mb-6"
                    >
                      <FaQuoteLeft className="text-4xl text-maroon mx-auto opacity-50" />
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic"
                    >
                      "{testimonialsData[currentIndex].testimonial}"
                    </motion.p>

                    {/* Rating */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex justify-center mb-6"
                    >
                      {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <FaStar className="text-yellow-400 text-xl mx-1" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center justify-center gap-4"
                    >
                      <img
                        src={testimonialsData[currentIndex].image}
                        alt={testimonialsData[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                        loading="lazy"
                      />
                      <div className="text-left">
                        <h4 className="text-white font-semibold text-lg">
                          {testimonialsData[currentIndex].name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonialsData[currentIndex].title}
                        </p>
                        <p className="text-maroon text-sm font-medium">
                          {testimonialsData[currentIndex].company}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="text-white text-xl" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="text-white text-xl" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonialsData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-maroon scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            Swipe or use arrows to navigate • Auto-play every 5 seconds
          </p>
        </div>
      </div>

      {/* Auto-play functionality */}
      <div className="hidden">
        {React.useEffect(() => {
          const interval = setInterval(nextTestimonial, 5000);
          return () => clearInterval(interval);
        }, [currentIndex])}
      </div>
    </section>
  );
};

export default Testimonials;
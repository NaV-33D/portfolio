
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import DarkVeil from './ui/DarkVeil';
import homeimg from '../assets/home.jpeg';

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 hero-gradient overflow-hidden">
  {/* Dark veil background */}
  {/* <div className="absolute inset-0 z-0">
    <DarkVeil />
  </div> */}

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Hi, I'm <span className="gradient-text">Naveed</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Front-End Developer</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            Engineering graduate and tech enthusiast specializing in building responsive, user-friendly websites and applications. Proficient in modern web technologies with a passion for creating clean, efficient, and visually appealing digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => navigate("/projects")} className="group text-black">
              View My Work
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>

            <Button variant="outline" size="lg" className="group">
              Download CV
              <Download
                size={16}
                className="ml-2 group-hover:translate-y-1 transition-transform"
              />
            </Button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
            <img
              alt="Ahmed Naveed Sayed portrait"
              className="w-full h-[500px] object-cover"
              src={homeimg}
            />

            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-blue-500/60 z-10"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </div>
  </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-gray-200 dark:border-gray-800"
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text">1+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text">20+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text">10+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Happy Clients</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text">100%</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

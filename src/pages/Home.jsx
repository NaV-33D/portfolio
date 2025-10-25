
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactCTA from '@/components/ContactCTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <TestimonialsSection />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;

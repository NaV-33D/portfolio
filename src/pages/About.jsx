
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillsSection from '@/components/SkillsSection';
import ContactCTA from '@/components/ContactCTA';

const About = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: '2021 - Present',
      description: 'Lead the frontend development team in building modern web applications using React, Next.js, and TailwindCSS. Implemented CI/CD pipelines and improved performance by 40%.'
    },
    {
      title: 'Web Developer',
      company: 'Digital Solutions',
      period: '2018 - 2021',
      description: 'Developed responsive websites and web applications for various clients. Worked with Vue.js, Nuxt.js, and SCSS. Collaborated with designers to implement pixel-perfect UIs.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Studio',
      period: '2016 - 2018',
      description: 'Started as an intern and grew into a full-time role. Worked on frontend development using HTML, CSS, and JavaScript. Assisted in building e-commerce websites and landing pages.'
    }
  ];
  
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2014 - 2016',
      description: 'Specialized in Web Technologies and Human-Computer Interaction. Graduated with honors.'
    },
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'State University',
      period: '2010 - 2014',
      description: 'Focused on software development and database management. Participated in various hackathons and coding competitions.'
    }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
                <img  
                  alt="John Doe profile" 
                  className="w-full h-auto"
                 src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">John Doe</h2>
              <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-4">Creative Developer & Designer</h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate web developer with over 5 years of experience creating beautiful, functional, and user-friendly websites and applications. I specialize in frontend development with a focus on React, but I'm also comfortable working with backend technologies.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed client expectations. I believe in clean code, responsive design, and creating experiences that delight users.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar size={18} className="text-primary mr-2" />
                  <span>Born: January 15, 1990</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="text-primary mr-2" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mb-16 scroll-animation">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Briefcase size={24} className="text-primary mr-2" />
              Work Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16 scroll-animation">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <GraduationCap size={24} className="text-primary mr-2" />
              Education
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <span>{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <SkillsSection />
        <ContactCTA />
      </div>
    </motion.div>
  );
};

export default About;

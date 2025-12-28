
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillsSection from '@/components/SkillsSection';
import ContactCTA from '@/components/ContactCTA';

const About = () => {
  const experiences = [
    {
      title: 'Front-End Developer Intern',
      company: 'Orbit Technologies',
      period: '2025 – Present',
      description: 'Working as a frontend developer intern, focusing on building responsive user interfaces, optimizing web performance, and implementing modern UI/UX best practices.'
    },
    {
      title: 'Full Stack Web Developer Intern',
      company: 'GIT IT Solutions, Hubli, Karnataka',
      period: 'October 2023 – November 2023',
      description: 'Contributed to the web development team by designing and implementing features like login pages, pop-up windows, and home page. Involved in research, planning, prototyping, and full development cycle.'
    }
  ];
  
  const education = [
    {
      degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
      institution: 'Visvesvaraya Technological University, Karnataka',
      period: '2021 – 2025',
      description: 'CGPA: 8.02'
    },
    {
      degree: 'PUC Science',
      institution: 'KH PATIL College, Hubli, Karnataka',
      period: '2019 – 2021',
      description: 'Percentage: 76.86%'
    },
    {
      degree: 'CBSE School',
      institution: 'St. Anthony Public School, Hubli, India',
      period: '2009 – 2019',
      description: 'Percentage: 75.25%'
    }
  ];

  const certifications = [
    {
      title: 'Web Development',
      issuer: 'IBM, Wadwani, Rooman',
      period: 'Completed 2025',
      description: 'Covered frontend, backend, database, infra fundamentals including HTML, CSS, JavaScript, React, Node.js, deployment best practices, Web hosting, SQL databases, basics of DevOps, prompt engineering, and soft skills training.'
    },
    {
      title: 'JavaScript Programming',
      issuer: 'Infosys Springboard',
      period: 'Completed May 2024',
      description: 'Learned core JavaScript concepts including DOM manipulation, event handling, asynchronous programming, and API usage.'
    },
    {
      title: 'Python for Beginners',
      issuer: 'Simplilearn',
      period: 'Completed May 2024',
      description: 'Gained foundational knowledge in Python including data types, control structures, functions, and basic data analysis.'
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
                  alt="Ahmed Naveed Sayed profile" 
                  className="w-full h-auto"
                 src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Ahmed Naveed Sayed</h2>
              <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-4">Engineering Graduate & Tech Enthusiast</h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Engineering graduate and tech enthusiast with a strong passion for web development, specializing in building responsive, user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Tailwind CSS.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Experienced in developing and optimizing web pages for performance, accessibility, and mobile responsiveness. Skilled in leveraging the latest web development tools, version control systems, and best practices to deliver clean, efficient, and visually appealing digital experiences. Always eager to learn and stay updated with emerging technologies.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Phone size={18} className="text-primary mr-2" />
                  <span>+91-9611653160</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="text-primary mr-2" />
                  <span>naveedsayed88@gmail.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/naveed-sayed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:naveedsayed88@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
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

          <div className="mb-16 scroll-animation">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Award size={24} className="text-primary mr-2" />
              Certifications
            </h2>
            
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
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


import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Lightbulb } from 'lucide-react';
import SkillCard from '@/components/SkillCard';

const SkillsSection = () => {
  const skillsCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="h-5 w-5 text-blue-500" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Next.js', 'TailwindCSS', 'SASS', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      icon: <Database className="h-5 w-5 text-green-500" />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel', 'RESTful APIs', 'GraphQL']
    },
    {
      title: 'Tools & Technologies',
      icon: <Code className="h-5 w-5 text-purple-500" />,
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Firebase', 'Vercel', 'Netlify', 'Webpack', 'Vite']
    },
    {
      title: 'Design & Others',
      icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
      skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Wireframing', 'Prototyping', 'SEO', 'Performance Optimization']
    }
  ];
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools in the web development ecosystem. Here's a snapshot of my technical expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

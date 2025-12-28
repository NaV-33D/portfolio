
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Lightbulb } from 'lucide-react';
import SkillCard from '@/components/SkillCard';

const SkillsSection = () => {
  const skillsCategories = [
    {
      title: 'Web Development',
      icon: <Layout className="h-5 w-5 text-blue-500" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Reactjs', 'Tailwind CSS', 'Nextjs', 'Firebase']
    },
    {
      title: 'Programming Languages',
      icon: <Code className="h-5 w-5 text-purple-500" />,
      skills: ['Python', 'C++ (Basic)', 'JavaScript', 'SQL (Basic)', 'Git']
    },
    {
      title: 'Tools & Technologies',
      icon: <Database className="h-5 w-5 text-green-500" />,
      skills: ['Jupyter Notebook', 'VS Code', 'GitHub', 'ChatGPT', 'Firebase']
    },
    {
      title: 'Areas of Interest',
      icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
      skills: ['Mobile App Development', 'Web Development', 'Designing', 'Webpages', 'Artificial Intelligence']
    }
  ];
  
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
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

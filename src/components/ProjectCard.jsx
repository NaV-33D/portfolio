
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="scroll-animation"
    >
      <Card className="overflow-hidden card-hover h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img  
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
           src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7" />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.category}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="skill-pill">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

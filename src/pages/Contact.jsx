
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      details: 'naveedsayed88@gmail.com',
      link: 'mailto:naveedsayed88@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      details: '+91-9611***160',
      link: 'tel:+919611653160'
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      details: 'Hubli, Karnataka, India',
      link: 'https://maps.google.com/?q=Hubli,+Karnataka,+India'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Working Hours',
      details: 'Mon - Fri, 9AM - 5PM',
      link: null
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill out the form below or reach out directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="contact-card"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary hover:underline"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <ContactForm />
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img  
                  alt="Contact illustration" 
                  className="absolute inset-0 w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1607615896122-6c919f897e55" />
              </div>
            </div>
          </div>
          
          <div className="mt-16 h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4194,37.7749,-122.4094,37.7849&amp;layer=mapnik" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              aria-hidden="false" 
              tabIndex="0"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

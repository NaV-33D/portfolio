
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonialsData } from '@/data/testimonials';
import testimonal from '../assets/testimonal.png';


const TestimonialsSection = () => {
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const TOTAL_PAGES = 3; // fixed 3 dots/slides

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3);
      } else if (width >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const getPageItems = (pageIndex) => {
    const items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const dataIndex =
        (pageIndex * itemsPerPage + i) % testimonialsData.length;
      items.push(testimonialsData[dataIndex]);
    }
    return items;
  };

  const handleDotClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full flex-shrink-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getPageItems(pageIndex).map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name + index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="scroll-animation"
                    >
                      <Card className="h-full card-hover">
                        <CardContent className="pt-6">
                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${
                                  i < testimonial.rating
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                              <img  
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                                src={testimonal}
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-gray-100">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {testimonial.position}, {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              type="button"
              onClick={() => handleDotClick(pageIndex)}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentPage === pageIndex
                  ? 'bg-primary'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonials slide ${pageIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

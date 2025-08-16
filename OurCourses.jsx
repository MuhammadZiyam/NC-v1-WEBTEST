import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Gamepad2, 
  Globe, 
  Smartphone, 
  Palette, 
  Rocket,
  ArrowRight 
} from 'lucide-react';

const OurCourses = () => {
  // Course data array
  const courses = [
    {
      id: 1,
      title: "Basic Coding for Kids",
      description: "Learn the fundamentals of programming with fun, interactive lessons designed specifically for young learners. Start your coding journey today!",
      icon: <Code className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-red-200",
      hoverColor: "hover:from-red-600 hover:to-pink-600"
    },
    {
      id: 2,
      title: "Game Development for Kids",
      description: "Create your own video games! Learn game design principles and programming concepts while building exciting projects you can play with friends.",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
      hoverColor: "hover:from-teal-600 hover:to-cyan-600"
    },
    {
      id: 3,
      title: "Web Development for Kids",
      description: "Build amazing websites from scratch! Learn HTML, CSS, and JavaScript to create interactive web pages that showcase your creativity.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:from-blue-600 hover:to-indigo-600"
    },
    {
      id: 4,
      title: "App Development for Kids",
      description: "Design and build mobile apps for phones and tablets! Learn app development basics and create useful applications for everyday use.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      hoverColor: "hover:from-green-600 hover:to-emerald-600"
    },
    {
      id: 5,
      title: "Graphic Designing for Kids",
      description: "Express your creativity through digital art! Learn design principles, color theory, and create stunning graphics using modern tools.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      hoverColor: "hover:from-yellow-600 hover:to-orange-600"
    },
    {
      id: 6,
      title: "Other Coding Bootcamps",
      description: "Explore advanced programming concepts and specialized topics! From AI to robotics, discover exciting new areas of technology.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:from-purple-600 hover:to-violet-600"
    }
  ];

  // Animation variants for staggered card entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Courses
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fun, Interactive, and Beginner-Friendly
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course) => (
            <motion.article
              key={course.id}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`
                ${course.bgColor} 
                ${course.borderColor} 
                border-2 
                rounded-3xl 
                p-8 
                h-full 
                transition-all 
                duration-300 
                group-hover:shadow-2xl 
                group-hover:shadow-gray-200/50
                group-hover:scale-[1.02]
              `}>
                
                {/* Course Icon */}
                <motion.div 
                  className={`
                    w-20 h-20 
                    ${course.color} 
                    bg-gradient-to-br 
                    rounded-2xl 
                    flex items-center justify-center 
                    text-white 
                    mb-6 
                    mx-auto
                    shadow-lg
                  `}
                  whileHover={{ 
                    rotate: 5, 
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {course.icon}
                </motion.div>

                {/* Course Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                    {course.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <motion.button
                    className={`
                      ${course.color} 
                      bg-gradient-to-r 
                      text-white 
                      px-8 
                      py-3 
                      rounded-full 
                      font-semibold 
                      flex items-center 
                      gap-2 
                      mx-auto 
                      shadow-lg 
                      hover:shadow-xl 
                      transition-all 
                      duration-300
                      group-hover:shadow-2xl
                    `}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your coding adventure?
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary to-cyan-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCourses;

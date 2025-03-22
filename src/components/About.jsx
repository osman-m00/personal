import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
       
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/pic-personal.jpg" 
                alt="Mohamed Osman" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 font-['Montserrat']">
              About Me
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                I am a passionate Software Developer with a strong foundation in Information Technology, 
                Graduated from the school of computing and technology from Eastern Mediterranean  University. My journey in technology 
                is driven by a deep interest in creating innovative solutions and learning new technologies.
              </p>
              <p className="mb-4">
                With experience in both front-end and back-end development, I enjoy building 
                full-stack applications using modern technologies like React, Node.js, and various 
                databases. I'm particularly interested in web development and creating user-friendly 
                interfaces that solve real-world problems.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'MongoDB', 'SQL', 'Java'].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Resume
              </a>
              <a
                href="mailto:mohamedsr92@gmail.com"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
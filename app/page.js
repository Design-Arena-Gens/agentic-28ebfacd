'use client'

import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">EduLearn</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition">Courses</a>
              <a href="#articles" className="text-gray-700 hover:text-blue-600 transition">Articles</a>
              <a href="#videos" className="text-gray-700 hover:text-blue-600 transition">Videos</a>
              <a href="#resources" className="text-gray-700 hover:text-blue-600 transition">Resources</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <a href="#courses" className="block py-2 text-gray-700 hover:text-blue-600">Courses</a>
              <a href="#articles" className="block py-2 text-gray-700 hover:text-blue-600">Articles</a>
              <a href="#videos" className="block py-2 text-gray-700 hover:text-blue-600">Videos</a>
              <a href="#resources" className="block py-2 text-gray-700 hover:text-blue-600">Resources</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-blue-600">Testimonials</a>
              <button className="mt-2 w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Learning Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Access world-class courses, articles, and resources designed to help you achieve your educational goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Explore Courses
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-blue-600">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Learn from industry experts with our carefully curated course collection
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Web Development Fundamentals', category: 'Programming', students: '12,453', duration: '8 weeks' },
              { title: 'Data Science Essentials', category: 'Data Science', students: '9,872', duration: '10 weeks' },
              { title: 'Digital Marketing Mastery', category: 'Marketing', students: '15,234', duration: '6 weeks' },
              { title: 'UI/UX Design Principles', category: 'Design', students: '11,098', duration: '7 weeks' },
              { title: 'Python for Beginners', category: 'Programming', students: '18,765', duration: '5 weeks' },
              { title: 'Business Analytics', category: 'Business', students: '7,654', duration: '9 weeks' }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <div className="text-sm text-blue-600 font-semibold mb-2">{course.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <span className="mr-4">👥 {course.students}</span>
                  <span>⏱️ {course.duration}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stay updated with insights, tips, and best practices from education experts
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '10 Study Techniques That Actually Work', date: 'Nov 20, 2025', readTime: '5 min' },
              { title: 'The Future of Online Learning', date: 'Nov 18, 2025', readTime: '7 min' },
              { title: 'How to Stay Motivated While Learning', date: 'Nov 15, 2025', readTime: '4 min' }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-4xl">✍️</span>
                </div>
                <div className="text-sm text-gray-500 mb-2">{article.date} • {article.readTime} read</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{article.title}</h3>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Video Tutorials</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Watch and learn at your own pace with our comprehensive video library
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Getting Started with Programming', views: '45K', duration: '15:30' },
              { title: 'Advanced Data Analysis Techniques', views: '32K', duration: '22:45' },
              { title: 'Design Thinking Workshop', views: '28K', duration: '18:20' },
              { title: 'Career Development Masterclass', views: '51K', duration: '25:10' }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                <div className="bg-gradient-to-br from-blue-200 to-green-200 h-64 flex items-center justify-center relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                    <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <div className="text-gray-600 text-sm">👁️ {video.views} views</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Resources Section */}
      <section id="resources" className="py-20 px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Interactive Resources</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Enhance your learning with interactive tools and hands-on exercises
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Quizzes', desc: 'Test your knowledge' },
              { icon: '💻', title: 'Code Labs', desc: 'Practice coding' },
              { icon: '📊', title: 'Worksheets', desc: 'Downloadable exercises' },
              { icon: '🎮', title: 'Games', desc: 'Learn through play' }
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.desc}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of successful learners who have transformed their careers
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Software Developer', text: 'EduLearn helped me transition into tech. The courses are well-structured and the instructors are amazing!' },
              { name: 'Michael Chen', role: 'Data Analyst', text: 'The quality of content is outstanding. I landed my dream job within 3 months of completing the program.' },
              { name: 'Emily Rodriguez', role: 'UX Designer', text: 'Best investment in my education. The community support and resources are invaluable.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-md">
                <div className="text-blue-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 50,000 students who are already learning with EduLearn
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-xl">
            Sign Up Free Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">EduLearn</h3>
              <p className="text-gray-400">Empowering learners worldwide with quality education.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Programming</a></li>
                <li><a href="#" className="hover:text-white transition">Data Science</a></li>
                <li><a href="#" className="hover:text-white transition">Design</a></li>
                <li><a href="#" className="hover:text-white transition">Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Articles</a></li>
                <li><a href="#" className="hover:text-white transition">Videos</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

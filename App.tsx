import React, { useState, useEffect } from 'react';
import {
  Award,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Star,
  Clock,
  Coffee,
  Sparkles,
  Utensils,
  ShoppingCart,
  Trash2
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'Smart Serve Certified', icon: Coffee, color: 'bg-amber-500' },
    { name: 'Food Safety & Handling', icon: Utensils, color: 'bg-green-500' },
    { name: 'POS & Cash Handling', icon: ShoppingCart, color: 'bg-blue-500' },
    { name: 'Sanitization Pro', icon: Sparkles, color: 'bg-pink-500' },
  ];

  const experience = [
    {
      title: 'Cashier',
      company: 'Singh Sons',
      location: 'Nabha, Punjab',
      period: '2023 – 2024',
      icon: ShoppingCart,
      duties: [
        'Operated POS system with precision',
        'Handled cash, credit & debit transactions',
        'Maintained spotless customer service area',
        'Resolved customer inquiries promptly'
      ]
    },
    {
      title: 'Janitor',
      company: 'LIC Agent Office',
      location: 'Nabha, Punjab',
      period: '2022 – 2023',
      icon: Trash2,
      duties: [
        'Maintained professional office standards',
        'Sanitized kitchen & breakroom areas',
        'Cleaned food prep surfaces & appliances',
        'Managed waste removal & sanitation'
      ]
    }
  ];

  const certifications = [
    { name: 'Smart Serve Certificate', validity: '2025-2030' },
    { name: 'Food Safety Certification', validity: '2025-2030' }
  ];

  const availability = [
    { day: 'Monday', time: 'Full Day' },
    { day: 'Tuesday', time: 'Full Day' },
    { day: 'Wednesday', time: 'Until 5 PM' },
    { day: 'Thursday', time: '3 PM – 9 PM' },
    { day: 'Friday', time: '3 PM – 9 PM' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none opacity-30 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />

      <div className="relative z-10">
        <header className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                LOVEJEET SINGH
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-full animate-pulse"></div>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Reliable & enthusiastic Trent University student ready to deliver exceptional service as
              <span className="text-cyan-400 font-semibold"> Bartender, Floor Staff, Cashier, or Food Prep</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              <a href="tel:+17422470123" className="flex items-center gap-2 hover:text-cyan-400 transition-all hover:scale-110">
                <Phone size={20} />
                <span>+1 (742) 247-0123</span>
              </a>
              <a href="mailto:lovejeetsingh@trentu.ca" className="flex items-center gap-2 hover:text-cyan-400 transition-all hover:scale-110">
                <Mail size={20} />
                <span>lovejeetsingh@trentu.ca</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Peterborough, ON</span>
              </div>
            </div>
          </div>
        </header>

        <main className="px-6 py-20 max-w-7xl mx-auto space-y-28">
          <section id="certifications">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                      <Award size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-slate-400">Valid: {cert.validity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Key Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`relative p-8 bg-slate-800 rounded-2xl border-2 border-slate-700 hover:border-transparent transition-all duration-500 cursor-pointer transform hover:scale-110 hover:-rotate-2 ${
                      hoveredSkill === skill.name ? 'shadow-2xl' : ''
                    }`}
                    style={{
                      boxShadow: hoveredSkill === skill.name ? `0 20px 60px rgba(59, 130, 246, 0.5)` : 'none'
                    }}
                  >
                    <div className={`absolute inset-0 ${skill.color} opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                    <div className="relative z-10 text-center">
                      <div className={`inline-block p-4 ${skill.color} rounded-xl mb-4 transform transition-transform duration-300 ${
                        hoveredSkill === skill.name ? 'rotate-360 scale-125' : ''
                      }`}>
                        <Icon size={32} />
                      </div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="experience">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => {
                const Icon = job.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-800 rounded-2xl border border-slate-700 hover:border-cyan-400 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <Icon size={40} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div>
                            <h3 className="text-3xl font-bold group-hover:text-cyan-400 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-xl text-cyan-400">{job.company}</p>
                            <p className="text-slate-400">{job.location}</p>
                          </div>
                          <span className="px-4 py-2 bg-slate-900 rounded-full text-slate-300 border border-slate-700 mt-2 md:mt-0">
                            {job.period}
                          </span>
                        </div>
                        <ul className="space-y-3">
                          {job.duties.map((duty, dutyIndex) => (
                            <li
                              key={dutyIndex}
                              className="flex items-start gap-3 text-slate-300 group-hover:translate-x-2 transition-transform duration-300"
                              style={{ transitionDelay: `${dutyIndex * 50}ms` }}
                            >
                              <Star className="flex-shrink-0 mt-1 text-cyan-400" size={16} />
                              <span>{duty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="availability">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Weekly Availability
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {availability.map((slot, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="text-green-400" size={24} />
                    <h3 className="font-bold text-xl">{slot.day}</h3>
                  </div>
                  <p className="text-slate-300">{slot.time}</p>
                  <div className="mt-4 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 border border-slate-700">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                <GraduationCap size={48} />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Education
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Bachelor of Business Administration</h3>
                    <p className="text-cyan-400 text-lg">Trent University, Peterborough, ON</p>
                    <p className="text-slate-400">In Progress (2025 – Present)</p>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Secondary School Graduation Certificate</h3>
                    <p className="text-slate-300">Dayanand Public School, Nabha, Punjab</p>
                    <p className="text-slate-400">Graduated March 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 p-1 rounded-2xl animate-gradient">
              <div className="bg-slate-900 rounded-xl px-12 py-8">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Let's Connect
                </h3>
                <p className="text-slate-300 mb-6 text-lg">
                  Punctual, dependable, and ready to deliver excellence
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="tel:+17422470123"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Call Me
                  </a>
                  <a
                    href="mailto:lovejeetsingh@trentu.ca"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
                  >
                    <Mail size={20} />
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 text-center text-slate-400 border-t border-slate-800">
          <p className="text-lg">
            Committed to maintaining the highest standards of hygiene, safety, and customer service
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;

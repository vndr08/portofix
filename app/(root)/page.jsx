// Copyright (C) 2026 Ivander Johana Pratama
// Ivan's Professional Portfolio
// Licensed under MIT License

"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

// components
import Button from "@/components/Button";
import Me from "@/public/image/ivander.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  // Suppress fullPage.js license warning in development
  useEffect(() => {
    const originalError = console.error;
    console.error = function(...args) {
      if (args[0]?.includes?.("fullPage") || args[0]?.toString?.().includes?.("licenseKey")) {
        return;
      }
      originalError.apply(console, args);
    };
    
    return () => {
      console.error = originalError;
    };
  }, []);

  const fullpageOptions = {
    anchors: ["home", "about", "projects", "contact"],
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    menu: "#sidebar",
    lockAnchors: false,
    responsiveWidth: 768,
    responsiveHeight: 600,
    fitToSection: true,
  };

  return (
    <div>
      <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            {/* HOME SECTION */}
            <div className="section">
              <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 gap-8 p-10 overflow-hidden md:px-20 h-screen flex items-center">
                <motion.div
                  className="flex flex-col justify-center items-center md:items-start text-center md:text-start"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  {/* Profile Photo Mobile */}
                  <motion.div 
                    className="block md:hidden col-span-1 mx-auto mb-10"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100, duration: 0.8 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-2xl h-48 w-48 shadow-2xl overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.5)"
                      }}
                      transition={{ type: "spring", damping: 15 }}
                    >
                      <Image
                        src={Me}
                        alt="Ivander Johana Pratama"
                        className="rounded-2xl w-full h-full object-cover"
                        priority
                        quality={85}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Location Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 text-sm text-emerald-600 font-semibold mb-4"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05, type: "spring", duration: 0.8 }}
                  >
                    <FontAwesomeIcon icon={faMapPin} width={14} />
                    Cikarang, Bekasi | Indonesia
                  </motion.div>

                  {/* Name */}
                  <motion.h1
                    className="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-bold my-2 md:my-3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring", duration: 0.8 }}
                  >
                    Ivander Johana Pratama
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    className="text-xl md:text-2xl font-semibold text-emerald-600 mb-2"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15, type: "spring", duration: 0.8 }}
                  >
                    Application Support & AI Developer
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-lg"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", duration: 0.8 }}
                  >
                    Final year Information Systems student at <span className="font-semibold text-slate-900">President University</span> specializing in Data Science. Currently interning at <span className="font-semibold text-slate-900">PT Jababeka Tbk</span> developing enterprise-level AI systems, chatbots, and data automation solutions. Passionate about building scalable applications that solve real problems.
                  </motion.p>

                  {/* Key Skills */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.25, type: "spring", duration: 0.8 }}
                  >
                    {["Python", "Data Science", "AI/ML", "Web Development", "React", "FastAPI"].map((skill, idx) => (
                      <span key={idx} className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", duration: 0.8 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", damping: 20 }}
                    >
                      <Button>
                        <Link href="/about" className="flex items-center gap-2">
                          About Me <FontAwesomeIcon icon={faArrowRight} width={16} />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", damping: 20 }}
                    >
                      <Button style={{ background: "transparent", border: "2px solid #10B981", color: "#10B981" }}>
                        <a href="mailto:ivanderjohanapratama@gmail.com" className="flex items-center gap-2">
                          Get in Touch
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    className="flex flex-col gap-2 text-sm text-slate-600 mb-6"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.35, type: "spring", duration: 0.8 }}
                  >
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faEnvelope} width={16} />
                      <a href="mailto:ivanderjohanapratama@gmail.com" className="hover:text-emerald-600 transition-colors">
                        ivanderjohanapratama@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faPhone} width={16} />
                      <a href="tel:+628217515473" className="hover:text-emerald-600 transition-colors">
                        +62 821 7515 4739
                      </a>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    className="flex gap-4"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", duration: 0.8 }}
                  >
                    <Link href="https://linkedin.com/in/ivanderjohanapratama" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} width={24} className="text-slate-600 hover:text-emerald-600 transition-colors" />
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} width={24} className="text-slate-600 hover:text-emerald-600 transition-colors" />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Profile Photo Desktop */}
                <motion.div
                  className="hidden md:flex justify-center items-center"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-3xl h-96 w-96 shadow-2xl overflow-hidden relative"
                    whileHover={{ 
                      scale: 1.03,
                      rotateZ: 2,
                      boxShadow: "0 50px 100px -20px rgba(16, 185, 129, 0.6)"
                    }}
                    transition={{ type: "spring", damping: 12, stiffness: 100 }}
                  >
                    {/* Animated background glow */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-3xl"
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <Image
                      src={Me}
                      alt="Ivander Johana Pratama"
                      className="rounded-3xl w-full h-full object-cover relative z-10"
                      priority
                      quality={85}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="section bg-gradient-to-br from-slate-50 to-emerald-50">
              <div className="mx-auto container p-10 md:px-20 min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                  >
                    <motion.h2 
                      className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, type: "spring", duration: 0.6 }}
                    >
                      About Me
                    </motion.h2>
                    <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, type: "spring" }}
                      >
                        I&rsquo;m an <span className="font-semibold text-emerald-600">Application Support & AI Developer</span> combining enterprise infrastructure expertise with cutting-edge artificial intelligence. Currently interning at <span className="font-semibold text-slate-900">PT Jababeka Tbk</span>, I design and deploy intelligent systems that streamline operations and drive digital transformation.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        As a final-year <span className="font-semibold text-slate-900">Information Systems student</span> at President University specializing in Data Science, I bridge the gap between technical infrastructure and intelligent automation. My work spans full-stack development, machine learning models, and enterprise data workflows—all crafted with a focus on scalability and real-world impact.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, type: "spring" }}
                      >
                        Beyond code, I bring <span className="font-semibold text-emerald-600">strategic leadership</span>, <span className="font-semibold text-emerald-600">cross-functional collaboration</span>, and a results-driven mindset honed through extensive campus involvement and real-world project deployments. I thrive when solving complex problems at the intersection of technology and business needs.
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-4"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                  >
                    <motion.div 
                      className="bg-white border-l-4 border-emerald-600 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, type: "spring" }}
                    >
                      <h3 className="text-xs font-bold text-emerald-600 mb-2 tracking-widest">EDUCATION</h3>
                      <p className="text-xl font-bold text-slate-900">President University</p>
                      <p className="text-slate-600 font-medium">B.Sc Information Systems</p>
                      <p className="text-slate-500 text-sm">Data Science Specialization</p>
                      <p className="text-emerald-600 font-bold mt-3 text-lg">3.67 GPA</p>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-l-4 border-emerald-600 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <h3 className="text-xs font-bold text-emerald-600 mb-2 tracking-widest">CURRENT ROLE</h3>
                      <p className="text-xl font-bold text-slate-900">Application Support Intern</p>
                      <p className="text-slate-600 font-medium">PT Jababeka Tbk</p>
                      <p className="text-emerald-600 font-semibold mt-2">Aug 2025 - Present</p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { number: "9", label: "Projects Deployed" },
                        { number: "15+", label: "Tech Skills" },
                        { number: "8", label: "Certifications" },
                        { number: "3.67", label: "GPA" }
                      ].map((stat, idx) => (
                        <motion.div 
                          key={idx}
                          className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-5 rounded-lg text-center shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.05, rotateY: 10 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25 + idx * 0.05, type: "spring" }}
                        >
                          <h3 className="text-3xl font-bold text-white">{stat.number}</h3>
                          <p className="text-white font-semibold text-sm">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* PROJECTS SECTION */}
            <div className="section">
              <div className="mx-auto container p-10 md:px-20 min-h-screen flex flex-col justify-center">
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="mb-12"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Featured Projects
                  </h2>
                  <p className="text-lg text-slate-600">
                    Recent work showcasing my expertise in AI, web development, and data science
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "AI Agent Chatbot System",
                      desc: "Enterprise-level helpdesk chatbot using LangChain, FastAPI & Ollama",
                      date: "Aug 2025 - Present",
                      tech: ["LangChain", "FastAPI", "Ollama", "NLP"],
                    },
                    {
                      title: "EduIntel",
                      desc: "ML system for detecting underperforming students using Random Forest",
                      date: "May 2025",
                      tech: ["Python", "Django", "ML"],
                    },
                    {
                      title: "Kalbio Dashboard",
                      desc: "Real-time engineering monitoring dashboard with energy & MTTR tracking",
                      date: "Jul 2025",
                      tech: ["Next.js", "Node.js", "PostgreSQL"],
                    },
                    {
                      title: "Streamlit Automation Tool",
                      desc: "Internal tool for detecting duplicate data in CSV/Excel files",
                      date: "Aug 2025",
                      tech: ["Streamlit", "Python", "Pandas"],
                    },
                    {
                      title: "BERSUARA App",
                      desc: "Anonymous chat application with auto-generated usernames",
                      date: "Sep - Dec 2024",
                      tech: ["Android", "Firebase", "Java"],
                    },
                    {
                      title: "Hospital System",
                      desc: "Revenue cycle & patient management system simulation",
                      date: "May 2025",
                      tech: ["PHP", "MySQL", "Database Design"],
                    },
                  ].map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ y: 50, opacity: 0, rotate: -5 }}
                      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                      whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.2)" }}
                      transition={{ delay: idx * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                      className="bg-white border border-slate-200 p-6 rounded-xl group cursor-pointer"
                    >
                      <motion.h3 
                        className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.05 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-slate-600 text-sm mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.1 }}
                      >
                        {project.desc}
                      </motion.p>
                      <motion.p 
                        className="text-xs text-slate-500 font-semibold mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.15 }}
                      >
                        {project.date}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                      >
                        {project.tech.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            className="bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-300 hover:border-emerald-500"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-12 text-center"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring", duration: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <Button>
                      <Link href="/projects" className="flex items-center gap-2">
                        View All Projects & Details <FontAwesomeIcon icon={faArrowRight} width={16} />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="section bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="mx-auto container p-10 md:px-20 h-screen flex items-center justify-center">
                <motion.div
                  className="text-center max-w-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Let&rsquo;s Work Together
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300 mb-12">
                    I&rsquo;m always interested in new opportunities, collaborations, and challenges. Whether you have a project in mind or just want to chat, feel free to reach out!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <Button>
                        <a href="mailto:ivanderjohanapratama@gmail.com" className="flex items-center gap-2">
                          Send Email <FontAwesomeIcon icon={faEnvelope} width={16} />
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <Button style={{ background: "white", border: "2px solid white", color: "#0F172A" }}>
                        <a href="https://linkedin.com/in/ivanderjohanapratama" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="space-y-3 text-slate-400 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                  >
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      📍 Cikarang, Bekasi, Indonesia
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.05 }}
                      className="hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      📧 ivanderjohanapratama@gmail.com
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                      className="hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      📱 +62 821 7515 4739
                    </motion.p>
                  </motion.div>

                  <div className="mt-16 pt-8 border-t border-slate-700">
                    <p className="text-slate-400">
                      © 2026 Ivander Johana Pratama. All rights reserved.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
        options={fullpageOptions}
      />
    </div>
  );
};

export default MyPage;

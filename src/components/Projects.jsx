import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import your custom CSS
import './Projects.css';

const projects = [
  {
    title: "Virtual Banking System",
    desc: "A desktop-based banking management application built with Java Swing and MySQL, supporting secure login, transactions, and history.",
    tags: ["#Java", "#Swing", "#MySQL", "#JDBC"],
    code: "#",
    demo: "#",
    image: "/images/vbs.png",
    status: "Completed",
    category: "Java • 2024",
  },
  {
    title: "Background Remover",
    desc: "An AI-powered web app to remove or replace image and video backgrounds with live webcam support.",
    tags: ["#Flask", "#OpenCV", "#Rembg", "#React"],
    code: "https://github.com/RitishaS/bg-remover",
    demo: "#",
    image: "/images/bg-remover-2.png",
    status: "Live",
    category: "AI Tools • 2025",
  },
  {
    title: "Currency Converter",
    desc: "A real-time currency converter with live API integration and a simple, intuitive UI for instant conversions.",
    tags: ["#HTML", "#CSS", "#JavaScript", "#APIs"],
    code: "https://github.com/RitishaS/currency-exchange-app",
    demo: "https://relaxed-duckanoo-a0b007.netlify.app/",
    image: "/images/curr.png",
    status: "Completed",
    category: "Web App • 2023",
  },
  {
    title: "InstaVibe",
    desc: "A MERN stack social media platform with camera support, captions, posting, and content management features.",
    tags: ["#MongoDB", "#Express", "#React", "#Node.js"],
    code: "https://github.com/RitishaS/Insstavibe",
    demo: "#",
    image: "/images/instavibe.png",
    status: "Completed",
    category: "Social Media • 2023",
  },

  {
    title: "Omegle",
    desc: "A real-time chat application inspired by Omegle, built using socket programming to connect random users instantly for seamless text-based communication.",
    tags: ["#React", "#Express", "#SocketIO", "#Node.js", "#RealTimeChat"],
    code: "https://github.com/RitishaS/Insstavibe",
    demo: "#",
    image: "/images/omegle.png",
    status: "Completed",
    category: "Social Media • 2025",
  },

];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Projects</h2>

      <Swiper
  slidesPerView={'auto'}
  centeredSlides={true}
  loop={true}
  spaceBetween={30}
  pagination={{ clickable: true }}
  navigation={true}   // ✅ Bas itna hi rakhna
  modules={[Pagination, Navigation]}
  className="projects-carousel"
>

        {projects.map((proj, i) => (
          <SwiperSlide key={i}>
            <div className="project-card">
              <div className="project-image" style={{ backgroundImage: `url(${proj.image})` }}>
                <span className="status">{proj.status}</span>
                <span className="category">{proj.category}</span>
              </div>
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="tags">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="buttons">
                  <a href={proj.code} className="btn btn-outline" target="_blank" rel="noreferrer">Source Code</a>
                  <a href={proj.demo} className="btn" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Same Arrows, now working */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default Projects;

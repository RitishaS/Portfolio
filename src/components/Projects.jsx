import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
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
    code: "https://github.com/RitishaS/chat-app",
    demo: "#",
    image: "/images/omegle.png",
    status: "Completed",
    category: "Social Media • 2025",
  },
  {
    title: "Speedotype",
    desc: "A web app to test and improve typing speed and accuracy with real-time score tracking.",
    tags: ["#React", "#JavaScript", "#TypingTest"],
    code: "https://github.com/RitishaS/speedotype",
    demo: "https://speedotype.netlify.app/",
    image: "/images/speedotype.png",
    status: "Completed",
    category: "Productivity Tool • 2025",
  },
];

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">PROJECTS</h2>
      <div className="projects-underline"></div>

      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={false}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Pagination, Navigation]}
        className="projects-carousel"
      >
        {projects.map((proj, i) => (
          <SwiperSlide key={i}>
            <div className="project-card">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${proj.image})` }}
              >
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
                  <a
                    href={proj.code}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                  <a
                    href={proj.demo}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom arrows */}
        <div ref={prevRef} className="swiper-button-prev"></div>
        <div ref={nextRef} className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default Projects;

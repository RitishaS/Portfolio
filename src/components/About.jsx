import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-content"
        variants={{ hidden: {}, visible: {} }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* 🔽 Heading slides down */}
        <motion.h2
          className="about-heading"
          variants={{
            hidden: { opacity: 0, y: -60 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
          A little bit<br />
          <span className="about-subheading">about me :)</span>
        </motion.h2>

        {/* 🔼 Paragraph slides up */}
        <motion.p
          className="about-text"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
         I’m a 3rd-year Information Technology student and a passionate Frontend Developer who loves blending design and functionality to create beautiful, user-friendly web experiences. My journey into tech began with a simple curiosity about how websites work, and it’s grown into a full-blown passion for turning ideas into interactive reality.  
Currently, I’m exploring the MERN stack to expand my skills into full-stack development. I thrive on solving tricky bugs, experimenting with new frameworks, and building projects that people genuinely enjoy using.  
Outside of coding, you’ll probably find me sketching UI ideas, exploring new tech trends, or sipping coffee while brainstorming my next project.

        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;

import './Hero.css';
import ProfileImage from './ProfileImage';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from 'framer-motion';

const Hero = () => {
  const words = ['Hiii', 'Hello'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typeTimeout;

    if (!isDeleting) {
      if (text === currentWord) {
        typeTimeout = setTimeout(() => {
          setIsDeleting(true);
          setSpeed(150);
        }, 1000);
      } else {
        typeTimeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, speed);
      }
    } else {
      typeTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 80);
    }

    return () => clearTimeout(typeTimeout);
  }, [text, isDeleting, currentWordIndex]);

  return (
    <section className="hero-section">
      {/* 🎯 Wrap entire content in motion.div */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-text">
          <p className="hero-subtitle">WELCOME TO MY PORTFOLIO</p>
          <h1 className="hero-title">
            <span className="highlighted-word">{text}</span>
            <span className="cursor">|</span><span className="highlighted-word">, I'm</span>{' '}
            <span className="gradient-name">Ritisha</span>
          </h1>

          <h2 className="hero-role">Frontend Developer</h2>

         
        </div>

        <div className="hero-image">
          <ProfileImage />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

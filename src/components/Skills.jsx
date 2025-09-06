// Skills.js
import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h2>SKILLS</h2>
      {/* underline ko yaha rakho */}
      <div className="skills-underline"></div>

      <p className="skills-subtitle">
        A blend of creativity and logic – here are the tools and technologies I work with.
      </p>

      <div className="skills-container">
        {/* Pehli row (First Row) - Ab 7 skills hain */}
        <div className="skills-row">
          <div className="skill-item-container">
            <div className="skill skill-html">
              <img src="/images/html.png" alt="HTML" />
            </div>
            <span className="skill-name">HTML</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-css">
              <img src="/images/css.png" alt="CSS" />
            </div>
            <span className="skill-name">CSS</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-js">
              <img src="/images/js.png" alt="JavaScript" />
            </div>
            <span className="skill-name">JavaScript</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-react">
              <img src="/images/react.png" alt="React" />
            </div>
            <span className="skill-name">React</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-node">
              <img src="/images/node.png" alt="Node.js" />
            </div>
            <span className="skill-name">Node.js</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-express">
              <img
                src="/images/express.png"
                alt="Express"
                className="force-circle-crop"
              />
            </div>
            <span className="skill-name">Express</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-python">
              <img
                src="/images/python.png"
                alt="Python"
                className="force-circle-crop"
              />
            </div>
            <span className="skill-name">Python</span>
          </div>
        </div>

        {/* Doosri row (Second Row) - Ab 6 skills hain */}
        <div className="skills-row">
          <div className="skill-item-container">
            <div className="skill skill-mysql">
              <img
                src="/images/mysql.png"
                alt="MySQL"
                className="force-circle-crop"
              />
            </div>
            <span className="skill-name">MySQL</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-java">
              <img src="/images/java.png" alt="Java" />
            </div>
            <span className="skill-name">Java</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-git">
              <img src="/images/git.png" alt="Git" />
            </div>
            <span className="skill-name">Git</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-mongodb">
              <img
                src="/images/MongoDb.png"
                alt="MongoDB"
                className="force-circle-crop"
              />
            </div>
            <span className="skill-name">MongoDB</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-firebase">
              <img
                src="/images/Firebase.png"
                alt="Firebase"
                className="force-circle-crop"
              />
            </div>
            <span className="skill-name">Firebase</span>
          </div>

          <div className="skill-item-container">
            <div className="skill skill-docker">
              <img src="/images/docker.png" alt="Docker" />
            </div>
            <span className="skill-name">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

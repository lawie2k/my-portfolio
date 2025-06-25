import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import Me from "./assets/Me.png";
import Circle from "./assets/Ellipse.png";
import Skills from "./assets/Group skills.png";
import Firebase from "./assets/firebase.png";
import Typescript from "./assets/typescript.png";
import Figma from "./assets/figma.png";
import React from "./assets/react.png";
import JS from "./assets/javascript.png";
import CSS from "./assets/css.png";
import HTML from "./assets/html.png";
import Tailwind from "./assets/tailwind.png";
import GroupSkillsMobile from "./assets/group skills mobile.png";
import Project1 from "./assets/Project barangay buddy.png";
import Project2 from "./assets/VibeCam.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKixePyFlHoHGjnx5zON0OvaMoaE9Wqx4",
  authDomain: "my-portfolio-6dc8c.firebaseapp.com",
  projectId: "my-portfolio-6dc8c",
  storageBucket: "my-portfolio-6dc8c.firebasestorage.app",
  messagingSenderId: "833674386333",
  appId: "1:833674386333:web:a751ea321d5d306c722d74",
  measurementId: "G-4ELDTGPNHM",
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

const home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
    });
  }, []);
  return (
    <>
      <div className="main">
        <div className="home-BG">
          <div className="header">
            <div className="gradient">
              <img src={Me} alt="my pic" className="me" data-aos="fade-down" />
            </div>
            <div className="header-text">
              <h1 data-aos="fade-up" data-aos-duration="2000">
                Hello! I Am <span>Art Laurence Siojo</span>
              </h1>

              <h2 data-aos="fade-up" data-aos-duration="1000">
                A Front-End Developer who
              </h2>
              <img
                src={Circle}
                alt=""
                data-aos="fade-up"
                data-aos-duration="4000"
              />
              <h3 data-aos="fade-up" data-aos-duration="4000">
                inspects the code before reading the <span> content</span>...
              </h3>
              <h4 data-aos="fade-up" data-aos-duration="5000">
                Because if the cover does not impress you what else can?
              </h4>
            </div>
          </div>

          <div className="about-me" id="about">
            <h2>I'm a Front-end Developer.</h2>
            <p data-aos="zoom-in-down">
              Aspiring Front-End Developer <br /> Currently a 3rd-year BSIT
              student exploring the world of web development for over a year
              now. I'm passionate about crafting clean, responsive, and
              user-focused websites—where every line of code adds value, and
              every design choice enhances the experience.
            </p>
          </div>

          <div className="skills" id="skills">
            <div className="skills-text">
              <h2 data-aos="zoom-in-down">
                I'm currently looking to join a <span>cross-functional</span>{" "}
                team
              </h2>
              <h3 data-aos="zoom-in-down">
                that values improving people's lives through accessible design{" "}
              </h3>
              <img src={GroupSkillsMobile} alt="" data-aos="zoom-in-up" />
            </div>
            <div className="skills-pic">
              <div
                className="skills-icon"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img src={Firebase} alt="firebase" className="skills" />
                <img src={Typescript} alt="typescript" className="skills" />
                <img src={Figma} alt="figma" className="skills" />
                <img src={React} alt="react" className="skills" />
                <img src={JS} alt="javascript" className="skills" />
                <img src={CSS} alt="CSS" className="skills" />
                <img src={HTML} alt="HTML" className="skills" />
                <img src={Tailwind} alt="tailwind" className="skills" />
              </div>
              <img src={Skills} alt="" />
            </div>
          </div>

          <div className="projects">
            <div className="project-content">
              <div className="project-text">
                <span>
                  <h2 data-aos="zoom-out" data-aos-delay="200">
                    Featured Project
                  </h2>
                </span>
                <h3 data-aos="zoom-out" data-aos-delay="300">
                  Barangay Buddy
                </h3>
                <div
                  className="project-about"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <p>
                    A web app for requesting barangay documents online. Easily
                    request permits, clearances, and certificates without
                    visiting <br />
                    the barangay hall. Connects all barangays within the <br />
                    municipality into one platform, making local services <br />{" "}
                    more accessible, efficient, and user-friendly.
                  </p>
                </div>
              </div>
              <img src={Project1} alt="" data-aos="fade-up" />
              <div className="gradient-proj" data-aos="fade-down"></div>
            </div>

            <div className="project-content1">
              <a href="https://vibecam-7481f.web.app/">
                <img src={Project2} alt="" data-aos="fade-up" />
              </a>
              <div className="project-text1">
                <span>
                  <h2 data-aos="zoom-out" data-aos-delay="200">
                    Featured Project
                  </h2>
                </span>
                <h3 data-aos="zoom-out" data-aos-delay="300">
                  VibeCam
                </h3>
                <div
                  className="project-about1"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <p>
                    VibeCam is a fun and simple web app that lets you take
                    photobooth-style snapshots right from your browser. Capture
                    up to 5 pictures with countdown and flash effects, preview
                    your shots, and download them as a photo strip.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contacts">
            <h2 data-aos="zoom-out">Contact</h2>
            <p data-aos="zoom-out">
              I'm currently looking to join a team that values clean, accessible
              web development and meaningful user experiences. Got a project in
              mind or need a developer to collaborate with? Let's connect!
            </p>

            <a href="mailto:rylecjaydaft@gmail.com">
              <h3 data-aos="zoom-out">rylecjaydaft@gmail.com</h3>
            </a>

            <div className="socials">
              <a
                href="https://www.facebook.com/artlaurence.siojo"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-right"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/lawie2k/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-down"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://github.com/lawie2k?fbclid=IwY2xjawK0nr1leHRuA2FlbQIxMABicmlkETE3T1Z5ZXc0TDFPcFFPbk1QAR6i90OQ1ZWXIiGU37A0hV_bkl7P_CXg5gtmrDKB5hwCy3Th3k4se0LpZObWCg_aem_CMDLbAg-ZpzAdg1Q-TxqpQ"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-left"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;

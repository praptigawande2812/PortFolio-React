import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="heading">CONTACT</div>
      <div className="container contact" id="contact" >
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <a href="https://www.linkedin.com/in/prapti-gawande-54003b25a" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/praptigawande2812" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:prapting2812@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
          <a href="https://www.instagram.com/praptigawande_28?igsh=cnJ6azZoZ29zZmli" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
         
        </div>
      </div>
    </>
  );
};

export default Contact;

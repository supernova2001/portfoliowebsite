import React from "react";
import { stackList } from "../../data/ProjectData";
import { MdSearch, MdSchool } from 'react-icons/md';
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <marquee id="openforpositions" scrollamount="5"><MdSchool></MdSchool> Pursuing <b style={{color: '#990000'}}>Masters in Computer Science</b> from Indiana University, Bloomington. | <MdSearch></MdSearch> Looking for <b style={{color: '#990000'}}>internship</b> and <b style={{color: "#990000"}}>full-time</b> opportunities in the field of Software Development and Data Science.</marquee>
      <hr></hr>
      <div className="Container">
        <div className="SectionTitle" style={{marginTop: "40px"}}>About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
        </ScrollAnimation>
          <div className="AboutBio">
            <img src="profile image.jpg" style={{width: "40%", height: "40%", display: "table", margin: "auto"}}></img>
            <br></br>
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! This is <strong>Janakiram Sharma Kashigari</strong>. I'm originally from India, currently living in the United States. I am pursuing my Master's in Computer Science from Indiana University, Bloomington. In total, I have 1.5 years of work experience with 1 year as a Software Engineer for Reputation.com and 6 months as a Systems Reliability Engineer Intern at Nutanix Inc.</ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            During my Bachelors, I got to work on various projects across several domains where I got to intensify my existing skills and improved my knowledge. I could gain experience and expertise in fields like Full stack application development, Data Science and Analytics, Machine Learning and Deep Learning.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
As a part of my Masters, I have completed core Computer Science courses including Applied Algorithms, Software Engineering and Advanced Database Concepts. Currently, I am enrolled in courses Applied Machine Learning, Systems and Security Protocols and Social Media Mining. 
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

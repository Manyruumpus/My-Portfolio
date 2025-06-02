import { useState } from 'react';
import Globe from 'react-globe.gl'; 

import Button from '../components/button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => { 
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Mohit Parihar</p>
              <p className="grid-subtext">  
              I am a passionate Full Stack Developer with 2+ years of experience in building web applications. 
              I specialize in React, Node.js, and modern web technologies. Currently pursuing B.Tech at IIT Kanpur,
              I've worked on various projects that have sharpened my problem-solving skills and technical expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech enthuthiastic </p>
              <p className="grid-subtext">
                I have extensive experience across multiple programming languages and frameworks. 
                In web development, I work with React.js for building interactive UIs and Three.js for creating immersive 3D graphics. 
                I'm proficient in JavaScript for frontend development and Java/C++ for backend systems. 
                I use VPython for scientific visualizations and LaTeX for technical documentation. 
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)" 
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
                
                <p className="grid-headtext">Building Global Connections Through Technology</p>
              <p className="grid-subtext">
                I thrive in collaborative environments and have extensive experience working in diverse teams.
                Through various projects, I've developed strong communication and teamwork skills. 
                I'm passionate about connecting with developers globally, sharing knowledge, and contributing to the tech community. 
                My experience includes remote collaboration with international teams, making me adaptable to different work cultures and time zones.
                </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                My passion for coding extends beyond just development - I'm deeply involved in competitive programming and algorithmic problem-solving. 
                I regularly participate in coding competitions on platforms like CodeForces and LeetCode, which has helped sharpen my analytical thinking and optimization skills. 
                In development, I love creating elegant solutions that combine technical excellence with great user experience. 
                I stay updated with the latest technologies and best practices, constantly learning and improving my craft.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[120px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">mohitp23@iitk.ac.in</p>
              </div>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">@mohit_____parihar</p>
              </div>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">+91 8602747758</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
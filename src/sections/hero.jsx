import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Html, useProgress } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
// import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import calculateSizes  from '../constants/index.js';
import Target from '../components/target.jsx';
import ReactLogo from '../components/reactlogo.jsx';
import Cube from '../components/cube.jsx';
import Rings from '../components/rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Rcube from '../components/rcube.jsx'
import Button from '../components/button.jsx';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        color: '#F1F1F1',
        fontSize: '14px',
        fontWeight: 800,
        textAlign: 'center'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 20px'
        }} />
        <p>
          {progress > 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
        </p>
      </div>
    </Html>
  )
}

const Hero = () => {
//  const x = useControls(
//     'HackerRoom',
//     {
//       positionX: {
//         value: 0,
//         min: -10,
//         max: 10,
//       },
//       positionY: {
//         value: -11,
//         min: -15,
//         max: 10,
//       },
//       positionZ: {
//         value: 2.5,
//         min: -10,
//         max: 10,
//       },
//       rotationX: {
//         value: 0.3,
//         min: -10,
//         max: 10,
//       },

//       rotationY: {
//         value: 3.14,
//         min: -10,
//         max: 10,
//       },

//       rotationZ: {
//         value: 0,
//         min: -10,
//         max: 10,
//       },  
//       scale: {
//         value: 0.15,
//         min: 0.01,
//         max: 2,
//       }
//     },
//   );
  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Mohit <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Learning, Exploring and Making</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={75} />
            <OrbitControls/>
            <HeroCamera isMobile={isMobile}>
              <HackerRoom 
                 
                  position={// [x.positionX, x.positionY, x.positionZ]
                    // [0, -11, 2.5]
                    sizes.deskPosition} 
                  rotation={// [x.rotationX, x.rotationY, x.rotationZ]
                    [0.3, 0, 0]}
                  scale={// [x.scale, x.scale, x.scale]
                    // [x.scale, x.scale, x.scale]
                  sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Rcube position={sizes.reactLogoPosition}/>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position ={sizes.cubePosition}/>
              <Rings position = {sizes.ringPosition}/>
            </group>
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero;

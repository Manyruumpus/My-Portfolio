// Target.jsx
import React, { useRef } from "react";
import gsap from "gsap";                 
import { useGSAP } from "@gsap/react";     
import { useGLTF } from "@react-three/drei";

const Target = (props) => {
  const targetRef = useRef();

  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      duration: 1.5,
      y: targetRef.current.position.y + -1,
      repeat: -1,
      yoyo: true,
      // zom: 1.5,
    });
  });

  return (
    <mesh {...props} ref={targetRef}
        position = {[-20, -10, 0]}
        scale = {[2, 2, 2]}
    >
      <primitive object={scene} />
    </mesh>
  );


};

export default Target;

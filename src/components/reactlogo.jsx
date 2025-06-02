import React, { useRef } from 'react'
import { useGLTF,Float } from '@react-three/drei'

const ReactLogo= (props) => {
    const { nodes, materials } = useGLTF('models/react.glb');

  return (
    <Float {...props} floatIntensity={1}>
      <group scale={0.01}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[800, 500.935, 0.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </Float>
  )
}

export default ReactLogo;
useGLTF.preload('/models/react.glb')
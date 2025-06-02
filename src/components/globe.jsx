// components/globe.jsx
import React, { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'

export function EarthModel(props) {
  const { scene } = useGLTF('/models/earth_night.glb')
  return <primitive object={scene} {...props} />
}

// preload to avoid stutter
useGLTF.preload('/models/earth_night.glb')

export default function Earth(props) {
  // you can tweak scale / rotation here if you like
  return (
    <group {...props}>
      <EarthModel scale={0.01} />
    </group>
  )
}

'use client'

import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function Phone() {
  const phoneRef = useRef<THREE.Group>(null!)
  const [isOpen, setIsOpen] = useState(true)
  const [startX, setStartX] = useState(0)
  
  // Load your image texture
  const texture = useTexture('/bg_phone.png') // Remove 'public' from the path

  useFrame((state) => {
    const targetRotation = isOpen ? 0 : Math.PI
    phoneRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
    phoneRef.current.rotation.x = THREE.MathUtils.lerp(
      phoneRef.current.rotation.x,
      targetRotation,
      0.05
    )
    if (isOpen) {
      phoneRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
    } else {
      phoneRef.current.position.y = THREE.MathUtils.lerp(
        phoneRef.current.position.y,
        -0.5,
        0.05
      )
    }
  })

  const handlePointerDown = (e: PointerEvent) => {
    setStartX(e.clientX)
  }

  const handlePointerUp = (e: PointerEvent) => {
    const delta = e.clientX - startX
    if (Math.abs(delta) > 25) {  // Reduced threshold for easier interaction
      setIsOpen(!isOpen)
    }
  }

  return (
    <group 
      ref={phoneRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {/* Phone body */}
      <mesh castShadow>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshPhongMaterial color="#2a2a2a" />
      </mesh>
      {/* Screen with image */}
      <mesh position={[0, 0, 0.051]}>
        <planeGeometry args={[0.9, 1.8]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      {/* Camera lens */}
      <mesh position={[0, 0.8, 0.051]}>
        <cylinderGeometry args={[0.05, 0.05, 0.01, 32]} />
        <meshPhongMaterial color="#111" />
      </mesh>
    </group>
  )
}

export function AnimatedPhone() {
  return (
    <div className="fixed bottom-4 right-4 w-[200px] h-[200px] z-40">
      <Canvas shadows camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1} 
          castShadow
        />
        <Phone />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  )
}

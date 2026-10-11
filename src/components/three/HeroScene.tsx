import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Points, PointMaterial, Torus } from '@react-three/drei'
import type { Group, Points as PointsObject } from 'three'

function OrbitalObject() {
  const group = useRef<Group>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 700

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x += (state.pointer.y * 0.16 - group.current.rotation.x) * 0.025
    group.current.rotation.z += (state.pointer.x * 0.12 - group.current.rotation.z) * 0.025
  })

  return (
    <group ref={group}>
      <Float speed={1.05} rotationIntensity={0.12} floatIntensity={0.25}>
        <mesh>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshPhysicalMaterial
            color="#111d2b"
            metalness={0.78}
            roughness={0.24}
            clearcoat={0.8}
            clearcoatRoughness={0.2}
            flatShading
          />
        </mesh>
        <mesh scale={1.012}>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshBasicMaterial color="#85d9e8" wireframe transparent opacity={0.31} />
        </mesh>
        <Torus args={[1.8, 0.007, 8, 160]} rotation={[1.14, 0.34, 0.46]}>
          <meshBasicMaterial color="#a1dbe4" transparent opacity={0.52} />
        </Torus>
        <Torus args={[2.02, 0.005, 8, 160]} rotation={[0.38, 0.92, -0.54]}>
          <meshBasicMaterial color="#8294ed" transparent opacity={0.39} />
        </Torus>
        {!isMobile && <mesh position={[1.4, 1.2, 0.5]}>
          <sphereGeometry args={[0.075, 16, 16]} />
          <meshBasicMaterial color="#a2eafa" />
        </mesh>}
      </Float>
    </group>
  )
}

function Starfield() {
  const ref = useRef<PointsObject>(null)
  const count = typeof window !== 'undefined' && window.innerWidth < 700 ? 350 : 850
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 11
      values[index * 3 + 1] = (Math.random() - 0.5) * 8
      values[index * 3 + 2] = (Math.random() - 0.5) * 7
    }
    return values
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.008
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#a5c4e6" size={0.012} sizeAttenuation depthWrite={false} opacity={0.58} />
    </Points>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      className="hero-canvas"
      fallback={<div className="scene-fallback-art"><span className="fallback-orbit" /><span className="fallback-core" /></div>}
      camera={{ position: [0, 0, 6.7], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      aria-label="An interactive floating geometric object with orbital rings"
    >
      <ambientLight intensity={0.72} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} color="#d8f3ff" />
      <pointLight position={[-4, -2, 1]} intensity={20} color="#6574ef" />
      <pointLight position={[2, -3, -2]} intensity={12} color="#36b5ca" />
      <Starfield />
      <OrbitalObject />
    </Canvas>
  )
}

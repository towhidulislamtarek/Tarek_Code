import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line, Sphere } from '@react-three/drei'
import type { Group } from 'three'

const nodes = [
  { name: 'BUILD', position: [-1.15, 0.72, 0.1] as [number, number, number], color: '#a5e0eb' },
  { name: 'LEARN', position: [0.1, 1.08, -0.12] as [number, number, number], color: '#a9b4ff' },
  { name: 'SECURE', position: [1.2, 0.55, 0.08] as [number, number, number], color: '#a5e0eb' },
  { name: 'EXPLORE', position: [-0.95, -0.72, -0.06] as [number, number, number], color: '#a9b4ff' },
  { name: 'CREATE', position: [0.38, -0.92, 0.16] as [number, number, number], color: '#a5e0eb' },
  { name: 'CONNECT', position: [1.14, -0.56, -0.12] as [number, number, number], color: '#a9b4ff' },
]

function Network() {
  const group = useRef<Group>(null)
  const links = useMemo(() => [[0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5]], [])

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.055
    group.current.rotation.x += (state.pointer.y * 0.08 - group.current.rotation.x) * 0.025
  })

  return (
    <group ref={group}>
      {links.map(([from, to]) => (
        <Line
          key={`${from}-${to}`}
          points={[nodes[from].position, nodes[to].position]}
          color="#7896c3"
          transparent
          opacity={0.34}
          lineWidth={1}
        />
      ))}
      {nodes.map((node) => (
        <group key={node.name} position={node.position}>
          <Sphere args={[0.075, 24, 24]}>
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.7} roughness={0.3} />
          </Sphere>
          <Sphere args={[0.14, 16, 16]}>
            <meshBasicMaterial color={node.color} transparent opacity={0.08} />
          </Sphere>
        </group>
      ))}
      <mesh>
        <icosahedronGeometry args={[0.36, 1]} />
        <meshStandardMaterial color="#17263b" metalness={0.7} roughness={0.3} wireframe />
      </mesh>
    </group>
  )
}

export default function InterestNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.7], fov: 38 }}
      dpr={[1, 1.35]}
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      aria-label="Interactive network of six connected points representing areas of interest"
    >
      <ambientLight intensity={1.2} />
      <pointLight position={[2, 2, 3]} intensity={12} color="#c7f3ff" />
      <Network />
    </Canvas>
  )
}

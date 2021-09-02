/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh
    Sphere001: THREE.Mesh
    Sphere002: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cylinder003: THREE.Mesh
    Cylinder004: THREE.Mesh
    Sphere004: THREE.Mesh
    Sphere005: THREE.Mesh
    Icosphere: THREE.Mesh
  }
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/tbp_see-saw_1lp.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.003']} />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={nodes.Sphere001.material}
        position={[-0.75, 0, -3.26]}
        rotation={[0, 0.21, 0]}
        scale={[0.88, 0.88, 0.88]}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={nodes.Sphere002.material}
        position={[-3.08, 0, 1.26]}
        rotation={[0, -0.12, 0]}
        scale={0.88}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-0.42, 0, -1.69]}
        rotation={[Math.PI / 2, 0, -0.21]}
        scale={[0.26, 1, 0.26]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[-1.61, 0, 0.6]}
        rotation={[Math.PI / 2, 0, -1.98]}
        scale={[0.26, 1, 0.26]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-0.33, 1.73, 0]}
        rotation={[0.22, -0.82, 0.28]}
        scale={[0.26, 1, 0.26]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-0.45, -1.73, 0]}
        rotation={[-0.23, -0.81, -0.33]}
        scale={[0.26, 1, 0.26]}
      />
      <mesh
        geometry={nodes.Sphere004.geometry}
        material={nodes.Sphere004.material}
        position={[-0.63, 3.41, 0.01]}
        rotation={[0, 0, 0.19]}
        scale={0.88}
      />
      <mesh
        geometry={nodes.Sphere005.geometry}
        material={nodes.Sphere005.material}
        position={[-0.77, -3.29, 0.01]}
        rotation={[0, 0, -0.22]}
        scale={0.88}
      />
      <mesh
        geometry={nodes.Icosphere.geometry}
        material={materials['Material.004']}
        position={[2.17, 0, 1.2]}
        rotation={[0, -0.47, Math.PI / 2]}
        scale={[0.92, 0.92, 0.92]}
      />
    </group>
  )
}

useGLTF.preload('/tbp_see-saw_1lp.gltf')
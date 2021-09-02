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
    Cylinder: THREE.Mesh
    Sphere001: THREE.Mesh
    Cylinder001: THREE.Mesh
    Sphere002: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/linear.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.001']} />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, 0, -1.84]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.26, 1, 0.26]}
      />
      <mesh geometry={nodes.Sphere001.geometry} material={nodes.Sphere001.material} position={[0, 0, 3.68]} />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, 0, 1.84]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.26, 1, 0.26]}
      />
      <mesh geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[0, 0, -3.67]} />
    </group>
  )
}

useGLTF.preload('/linear.gltf')

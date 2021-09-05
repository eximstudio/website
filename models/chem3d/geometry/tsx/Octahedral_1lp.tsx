/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder006: THREE.Mesh;
    Sphere001: THREE.Mesh;
    Sphere003: THREE.Mesh;
    Sphere004: THREE.Mesh;
    Sphere005: THREE.Mesh;
    Sphere006: THREE.Mesh;
    Sphere007: THREE.Mesh;
    Icosphere: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "/pbp_distorted octahedral_1lp.gltf"
  ) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, -1.85, 0]}
        scale={[0.18, 1, 0.18]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[0, -0.25, -1.84]}
        rotation={[1.46, 0, 0]}
        scale={[0.17, 1, 0.17]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-1.68, -0.04, -0.6]}
        rotation={[Math.PI / 2, 0.05, -1.2]}
        scale={[0.17, 1, 0.17]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-1.11, -0.07, 1.42]}
        rotation={[1.66, 0, -2.42]}
        scale={[0.17, 1, 0.17]}
      />
      <mesh
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[1.02, -0.19, 1.42]}
        rotation={[1.7, 0, 2.51]}
        scale={[0.17, 1, 0.17]}
      />
      <mesh
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[1.66, -0.1, -0.58]}
        rotation={[Math.PI / 2, -0.09, 1.26]}
        scale={[0.17, 1, 0.17]}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={nodes.Sphere001.material}
        position={[2.97, -0.23, -1]}
        rotation={[0, 0, -0.09]}
        scale={0.69}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={nodes.Sphere003.material}
        position={[0.01, -3.41, 0]}
        scale={0.69}
      />
      <mesh
        geometry={nodes.Sphere004.geometry}
        material={nodes.Sphere004.material}
        position={[0.02, -0.42, -3.25]}
        rotation={[-0.11, 0, 0]}
        scale={0.69}
      />
      <mesh
        geometry={nodes.Sphere005.geometry}
        material={nodes.Sphere005.material}
        position={[-2.96, -0.11, -1.15]}
        rotation={[0, 0, 0.05]}
        scale={0.69}
      />
      <mesh
        geometry={nodes.Sphere006.geometry}
        material={nodes.Sphere006.material}
        position={[-2.09, -0.19, 2.51]}
        rotation={[0.09, 0, 0]}
        scale={0.69}
      />
      <mesh
        geometry={nodes.Sphere007.geometry}
        material={nodes.Sphere007.material}
        position={[1.88, -0.35, 2.59]}
        rotation={[0.12, 0, 0]}
        scale={0.69}
      />
      <mesh
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.004"]}
        position={[0, 2.46, 0]}
        rotation={[-3.12, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/pbp_distorted octahedral_1lp.gltf");

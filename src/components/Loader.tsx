import { useFrame } from "@react-three/fiber";
import React, { forwardRef, MutableRefObject, useRef } from "react";
import { BoxBufferGeometry, Mesh, MeshLambertMaterial, Vector3 } from "three";

const Cube = forwardRef(({ pos }: { pos: number[] }, ref) => {
  const _geo: BoxBufferGeometry = new BoxBufferGeometry(1, 1, 1, 50, 50, 50);
  const _mat: MeshLambertMaterial = new MeshLambertMaterial({
    color: "white",
  });
  makeRounded(_mat, _geo);
  const _mesh = new Mesh(_geo, _mat);
  return <primitive object={_mesh} ref={ref} position={pos} />;
});

function makeRounded(boxMat: MeshLambertMaterial, boxGeom: BoxBufferGeometry) {
  boxMat.onBeforeCompile = (shader) => {
    shader.uniforms.boxSize = {
      value: new Vector3(
        boxGeom.parameters.width,
        boxGeom.parameters.height,
        boxGeom.parameters.depth
      ).multiplyScalar(0.5),
    };
    shader.uniforms.radius = { value: 0.1 };
    shader.vertexShader =
      `
  uniform vec3 boxSize;
  uniform float radius;
  ` + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      `#include <begin_vertex>`,
      `#include <begin_vertex>
    
    float maxRadius = clamp(radius, 0.0, min(boxSize.x, min(boxSize.y, boxSize.z)));
    vec3 signs = sign(position);
    
    vec3 subBox = boxSize - vec3(maxRadius);
    
    vec3 absPos = abs(transformed); 
    // xy
    vec2 sub = absPos.xy - subBox.xy;
    if (absPos.x > subBox.x && absPos.y > subBox.y && absPos.z <= subBox.z) {
      transformed.xy = normalize(sub) * maxRadius + subBox.xy;
      transformed.xy *= signs.xy;
    }
    // xz
    sub = absPos.xz - subBox.xz;
    if (absPos.x > subBox.x && absPos.z > subBox.z && absPos.y <= subBox.y) {
      transformed.xz = normalize(sub) * maxRadius + subBox.xz;
      transformed.xz *= signs.xz;
    }
    // yz
    sub = absPos.yz - subBox.yz;
    if (absPos.y > subBox.y && absPos.z > subBox.z && absPos.x <= subBox.x) {
      transformed.yz = normalize(sub) * maxRadius + subBox.yz;
      transformed.yz *= signs.yz;
    }
    
    // corner
    if (all(greaterThan(absPos, subBox))){
      vec3 sub3 = absPos - subBox;
      transformed = (normalize(sub3) * maxRadius + subBox) * signs;
    }
    
    // re-compute normals for correct shadows and reflections
    objectNormal = all(equal(position, transformed)) ? normal : normalize(position - transformed); 
    transformedNormal = normalMatrix * objectNormal; 

    `
    );
  };
}

function animate(cubes: MutableRefObject<Mesh | null>[]) {
  useFrame(({ clock }) => {
    const index = Math.floor((clock.getElapsedTime() * 1.5) % 8);
    const element = cubes[index]?.current;
    const position = Math.abs(Math.sin(clock.getElapsedTime() * 1.5 * Math.PI));
    element?.position.setY(position);
  });
}

export default function Loading(): JSX.Element {
  // const { progress } = useProgress();

  const cubes: MutableRefObject<Mesh | null>[] = [];

  for (let i = 0; i < 8; i++) {
    cubes.push(useRef<Mesh | null>(null));
  }

  animate(cubes);

  return (
    <group>
      <Cube pos={[0, 0, 0]} />
      <Cube ref={cubes[0]} pos={[1.3, 0, 0]} />
      <Cube ref={cubes[1]} pos={[1.3, 0, 1.3]} />
      <Cube ref={cubes[2]} pos={[0, 0, 1.3]} />
      <Cube ref={cubes[3]} pos={[-1.3, 0, 1.3]} />
      <Cube ref={cubes[4]} pos={[-1.3, 0, 0]} />
      <Cube ref={cubes[5]} pos={[-1.3, 0, -1.3]} />
      <Cube ref={cubes[6]} pos={[0, 0, -1.3]} />
      <Cube ref={cubes[7]} pos={[1.3, 0, -1.3]} />
    </group>
  );
}

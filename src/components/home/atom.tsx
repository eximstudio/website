import { Sparkles, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Atom() {
    return (
        <>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {/* <Neucleus /> */}
                <Electron />
                <OrbitControls />
            </Canvas>
        </>
    );
}

function Electron() {
    return <Sparkles count={100} scale={10} noise={0} speed={0}/>;
}

function Neucleus() {
    return (
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={0x00ff00} />
        </mesh>
    );
}

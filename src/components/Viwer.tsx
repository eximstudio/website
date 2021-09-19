import { Canvas, useLoader, Vector3 } from "@react-three/fiber";
import { useParams, useHistory } from "react-router";
import { folder, Leva, useControls } from "leva";
import { PerspectiveCamera, OrbitControls, Stats } from "@react-three/drei";
import "../css/viewer.css";
import { Suspense, useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { resolveURL } from "./utils";
import Loading from "./Loader";

function Model({
  url,
  animate,
  setTarget,
}: {
  url: string;
  animate: boolean;
  setTarget: React.Dispatch<
    React.SetStateAction<[x: number, y: number, z: number] | Vector3>
  >;
}): JSX.Element {
  const gltf = useLoader(GLTFLoader, url);
  if (animate) {
    // Animation frame
    // useFrame(({ clock }) => {});

    //Animation controls
    const [, setAnimation] = useControls(() => ({
      animation: folder({
        speed: {
          min: 0.5,
          max: 2,
          value: 1,
          onChange: (value: number) => {
            console.log(value);
          },
        },
      }),
    }));

    //
  }

  gltf.scene.scale.set(0.5, 0.5, 0.5);
  gltf.scene.position.set(0, 0, 0);
  setTarget(gltf.scene.position);

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
}

export default function Viewer(): JSX.Element {
  const { id = "some_unknown_model" }: { id: string } = useParams();

  const [_model, _setModel] = useState<JSX.Element>(<></>);
  const [target, setTarget] = useState<
    [x: number, y: number, z: number] | Vector3
  >([0, 0, 0]);

  const [_autorotate, _setAutorotate] = useState<boolean>(true);
  const [_autorotateSpeed, _setAutorotateSpeed] = useState<number>(2);
  const autorotate = useRef(_autorotate);
  const autorotateSpeed = useRef(_autorotateSpeed);

  useEffect(() => {
    resolveURL(id).then((model) =>
      model
        ? _setModel(
            <Model
              url={`/${encodeURI(model[0])}`}
              animate={model[1]}
              setTarget={setTarget}
            />
          )
        : _setModel(<Loading />)
    );
  }, [id]);

  const setAutorotate = (_: boolean) => {
    _setAutorotate(_);
    autorotate.current = _;
  };

  const setAutorotateSpeed = (_: number) => {
    _setAutorotateSpeed(_);
    autorotateSpeed.current = _;
  };

  const [, set] = useControls(() => ({
    autoRotate: {
      value: _autorotate,
      onChange: (value: boolean) => setAutorotate(value),
    },
  }));

  useControls({
    Advanced: folder(
      {
        autorotateSpeed: {
          min: 0.5,
          max: 10,
          value: 2,
          onChange: (value: number) => {
            setAutorotateSpeed(value);
          },
        },
      },
      { collapsed: true }
    ),
  });

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if ((e as KeyboardEvent).key === "Escape") {
        setAutorotate(!autorotate.current);
        set({ autoRotate: autorotate.current });
      }
    });
  }, []);

  const renderer = useRef<HTMLCanvasElement>(null);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Leva
        // collapsed
        titleBar={{
          title: "Settings",
          filter: false,
        }}
        hideCopyButton
        isRoot
        theme={{
          space: {
            rowGap: "5px",
            colGap: "2px",
          },
        }}
      />
      <Stats showPanel={0} className="stats" />

      <Canvas
        ref={renderer}
        frameloop="demand"
        className="canvas"
        gl={{ alpha: false }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <PerspectiveCamera position={[0, 0, 0]} />
        <OrbitControls
          autoRotate={_autorotate}
          autoRotateSpeed={_autorotateSpeed}
          enableDamping={true}
          target={target}
        />
        <Suspense fallback={Loading}>{_model}</Suspense>
      </Canvas>
    </div>
  );
}

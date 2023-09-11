import { Suspense, useEffect, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
extend({ OrbitControls, Preload });
import CanvasLoader from '../Loader'

const Galaxy = ({ isMobile }) => {
  const galaxy = useGLTF('./galaxy/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <ambientLight intensity={0.5} />
      {/* <spotLight
        position={[-20, -30, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <pointLight intensity={1} />
      <primitive
        object={galaxy.scene}
        scale={isMobile ? 0.1 : 3}
        position={isMobile ? [0, -2.5, -15] : [0, -3.25, -1]}
        rotation={[0.2, -0.5, -0.1]}
      />
    </mesh>
  );
};

const GalaxyCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Galaxy isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GalaxyCanvas;
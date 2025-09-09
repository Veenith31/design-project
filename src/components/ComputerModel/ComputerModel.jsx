import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';


function Model(props) {
  const { scene } = useGLTF('/computer.glb');
  const group = useRef();
  
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.5;
    }
  });
  

  return (
    <primitive 
      ref={group} 
      object={scene} 
      scale={0.4} 
      {...props} 
      dispose={null} 
    />
  );
}


const ComputerModel = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        {/* We use Suspense to show a loading fallback */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};


useGLTF.preload('/computer.glb');

export default ComputerModel;
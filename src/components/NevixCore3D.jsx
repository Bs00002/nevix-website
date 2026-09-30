import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const STATE_PALETTES = [
  {
    // BUILD: Frosted Cream & Soft Peach / Warm Coral
    primary: new THREE.Color("#F3CFC2"),
    emissive: new THREE.Color("#E7A99A"),
    secondary: new THREE.Color("#C97A67"),
    ringScale: 1.0,
    speed: 1.0,
  },
  {
    // AUTOMATE: Soft Lavender & Champagne Glass
    primary: new THREE.Color("#DCD3EA"),
    emissive: new THREE.Color("#E6D5B8"),
    secondary: new THREE.Color("#9E7B47"),
    ringScale: 1.12,
    speed: 1.45,
  },
  {
    // GROW: Soft Mint & Champagne Gold
    primary: new THREE.Color("#DCE9E2"),
    emissive: new THREE.Color("#E6D5B8"),
    secondary: new THREE.Color("#C97A67"),
    ringScale: 1.22,
    speed: 1.2,
  },
];

function DigitalCoreScene({ activeState = 0, isMobile = false }) {
  const rootGroup = useRef(null);
  const innerCoreRef = useRef(null);
  const outerWireRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  const nodesGroupRef = useRef(null);
  const coreMatRef = useRef(null);
  const wireMatRef = useRef(null);
  const ring1MatRef = useRef(null);
  const ring2MatRef = useRef(null);

  const nodePositions = useMemo(() => {
    const count = isMobile ? 6 : 10;
    const pts = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.1 + (i % 2) * 0.55;
      const y = Math.sin(angle * 2) * 0.9;
      pts.push([Math.cos(angle) * radius, y, Math.sin(angle) * radius]);
    }
    return pts;
  }, [isMobile]);

  const connectionLines = useMemo(() => {
    const lines = [];
    nodePositions.forEach((pos, idx) => {
      lines.push([[0, 0, 0], pos]);
      const nextPos = nodePositions[(idx + 1) % nodePositions.length];
      lines.push([pos, nextPos]);
    });
    return lines;
  }, [nodePositions]);

  useFrame((state, delta) => {
    const palette = STATE_PALETTES[activeState % STATE_PALETTES.length];
    const t = state.clock.getElapsedTime();

    // Smooth color interpolation based on BUILD / AUTOMATE / GROW state
    if (coreMatRef.current) {
      coreMatRef.current.color.lerp(palette.primary, delta * 3);
      coreMatRef.current.emissive.lerp(palette.emissive, delta * 3);
    }
    if (wireMatRef.current) {
      wireMatRef.current.color.lerp(palette.secondary, delta * 3);
    }
    if (ring1MatRef.current) {
      ring1MatRef.current.color.lerp(palette.secondary, delta * 3);
    }
    if (ring2MatRef.current) {
      ring2MatRef.current.color.lerp(palette.emissive, delta * 3);
    }

    // Mouse parallax + continuous orbital rotation
    if (rootGroup.current) {
      const targetX = state.pointer.y * 0.35;
      const targetY = state.pointer.x * 0.55;
      rootGroup.current.rotation.x = THREE.MathUtils.lerp(
        rootGroup.current.rotation.x,
        targetX,
        delta * 2.5
      );
      rootGroup.current.rotation.y = THREE.MathUtils.lerp(
        rootGroup.current.rotation.y,
        targetY + t * 0.15,
        delta * 2.5
      );
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y += delta * 0.45 * palette.speed;
      innerCoreRef.current.rotation.z += delta * 0.25 * palette.speed;
      const pulse = 1 + Math.sin(t * 2.4) * 0.05;
      innerCoreRef.current.scale.setScalar(pulse);
    }

    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= delta * 0.3 * palette.speed;
      outerWireRef.current.rotation.x += delta * 0.2 * palette.speed;
      const targetScale = THREE.MathUtils.lerp(
        outerWireRef.current.scale.x,
        palette.ringScale,
        delta * 2.5
      );
      outerWireRef.current.scale.setScalar(targetScale);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.35 * palette.speed;
      ring1Ref.current.rotation.x = Math.PI / 2.6 + Math.sin(t * 0.7) * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.4 * palette.speed;
      ring2Ref.current.rotation.x = -Math.PI / 3.2 + Math.cos(t * 0.5) * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z -= delta * 0.2 * palette.speed;
    }
    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y += delta * 0.18 * palette.speed;
    }
  });

  const baseScale = isMobile ? 0.75 : 1.05;

  return (
    <group ref={rootGroup} scale={baseScale}>
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.5}>
        {/* Central Frosted Cream / Champagne / Peach Glass Core */}
        <mesh ref={innerCoreRef}>
          <icosahedronGeometry args={[0.92, 1]} />
          <meshPhysicalMaterial
            ref={coreMatRef}
            color="#FFFDF8"
            emissive="#E6D5B8"
            emissiveIntensity={0.28}
            roughness={0.22}
            metalness={0.18}
            transmission={0.35}
            thickness={1.2}
            clearcoat={0.8}
            flatShading
          />
        </mesh>

        {/* Outer Geodesic Champagne Lattice Shell */}
        <mesh ref={outerWireRef}>
          <icosahedronGeometry args={[1.38, 2]} />
          <meshBasicMaterial
            ref={wireMatRef}
            color="#C97A67"
            wireframe
            transparent
            opacity={0.38}
          />
        </mesh>

        {/* Orbiting Precision Ring 1 (Warm Coral / Champagne) */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 2.5, 0.2, 0]}>
          <torusGeometry args={[2.05, 0.015, 16, isMobile ? 64 : 120]} />
          <meshBasicMaterial
            ref={ring1MatRef}
            color="#C97A67"
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* Orbiting Precision Ring 2 (Soft Champagne) */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 3, 0.5, 0.4]}>
          <torusGeometry args={[2.55, 0.012, 16, isMobile ? 64 : 120]} />
          <meshBasicMaterial
            ref={ring2MatRef}
            color="#9E7B47"
            transparent
            opacity={0.45}
          />
        </mesh>

        {/* Outer Equatorial Ring 3 */}
        <mesh ref={ring3Ref} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.05, 3.07, isMobile ? 48 : 96]} />
          <meshBasicMaterial
            color="#9E7B47"
            transparent
            opacity={0.22}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Orbiting Nodes & Neural Connections */}
        <group ref={nodesGroupRef}>
          {nodePositions.map((pos, i) => (
            <mesh key={`node-${i}`} position={pos}>
              <octahedronGeometry args={[0.075, 0]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#C97A67" : "#9E7B47"}
                roughness={0.3}
                metalness={0.4}
              />
            </mesh>
          ))}
          {!isMobile &&
            connectionLines.map((pts, idx) => (
              <Line
                key={`line-${idx}`}
                points={pts}
                color={idx % 2 === 0 ? "#C97A67" : "#9E7B47"}
                lineWidth={0.7}
                transparent
                opacity={0.22}
              />
            ))}
        </group>
      </Float>

      {/* Subtle Warm Studio Particles */}
      <Sparkles
        count={isMobile ? 30 : 75}
        scale={7}
        size={isMobile ? 1.4 : 2}
        speed={0.3}
        opacity={0.5}
        color="#C97A67"
      />

      {/* Subtle Perspective Warm Grid */}
      <gridHelper
        args={[18, 18, "#C97A67", "#DDD6CB"]}
        position={[0, -2.9, 0]}
        material-transparent={true}
        material-opacity={0.28}
      />
    </group>
  );
}

const NevixCore3D = ({ activeState = 0, isMobile = false, className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`} aria-hidden="true">
      <Canvas
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        camera={{ position: [0, 0.3, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {/* Soft Warm Studio Lighting */}
        <ambientLight intensity={1.35} color="#FFFDF8" />
        <directionalLight position={[5, 6, 5]} intensity={1.8} color="#FFFDF8" />
        <pointLight position={[4, 4, 4]} intensity={2.0} color="#F3CFC2" />
        <pointLight position={[-4, -3, -2]} intensity={1.5} color="#DCD3EA" />
        <DigitalCoreScene activeState={activeState} isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

export default NevixCore3D;

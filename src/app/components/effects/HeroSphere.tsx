import { useEffect, useRef } from 'react';
// @ts-ignore - Three.js types are provided at runtime/build in this workspace setup
import * as THREE from 'three';

export function HeroSphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(420, 420);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 3;

    const wireGeo = new THREE.IcosahedronGeometry(1.2, 4);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireSphere = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireSphere);

    const innerGeo = new THREE.SphereGeometry(1, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.04,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    const pointsGeo = new THREE.BufferGeometry();
    const points: number[] = [];

    for (let i = 0; i < 200; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.4 + Math.random() * 0.8;

      points.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }

    pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));

    const pointsMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
    });

    const particleCloud = new THREE.Points(pointsGeo, pointsMat);
    scene.add(particleCloud);

    let t = 0;
    let raf = 0;

    const animate = () => {
      t += 0.005;
      wireSphere.rotation.x = t * 0.3;
      wireSphere.rotation.y = t;
      particleCloud.rotation.y = t * 0.5;
      particleCloud.rotation.x = t * 0.2;

      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(raf);
      wireGeo.dispose();
      wireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-sphere-canvas" aria-hidden="true" />;
}

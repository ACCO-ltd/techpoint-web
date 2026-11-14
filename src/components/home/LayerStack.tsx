"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/** The four technology layers, bottom to top. */
export const layers = [
  { name: "Cloud & security", sub: "The foundation", color: "#1d1d1f", hex: 0x1d1d1f, opacity: 0.94 },
  { name: "Data", sub: "Reporting and insight", color: "#1f5eff", hex: 0x1f5eff, opacity: 0.82 },
  { name: "Software", sub: "Business systems", color: "#a9c1ff", hex: 0xa9c1ff, opacity: 0.72 },
  { name: "AI & automation", sub: "Decision support", color: "#ffffff", hex: 0xffffff, opacity: 0.88 },
] as const;

const clamp = (x: number) => Math.min(1, Math.max(0, x));
const ease = (x: number) => 1 - Math.pow(1 - clamp(x), 3);

/**
 * Hero centrepiece: four glass plates stacked in 3D with the Techpoint mark on top.
 * The plates drop in on load, then spread apart and turn as the page scrolls.
 * three.js is loaded on demand; without WebGL a still image is shown instead, and
 * with reduced motion a single settled frame is drawn.
 */
export function LayerStack() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      try {
        const THREE = await import("three");
        const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
        const wrap = wrapRef.current;
        const canvas = canvasRef.current;
        if (disposed || !wrap || !canvas) return;

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;

        const scene = new THREE.Scene();
        const pmrem = new THREE.PMREMGenerator(renderer);
        scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
        scene.environmentIntensity = 0.9;
        scene.add(new THREE.AmbientLight(0xffffff, 0.9));
        const key = new THREE.DirectionalLight(0xffffff, 2.6);
        key.position.set(-4, 7, 6);
        scene.add(key);
        const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 100);

        // Rounded square plate, extruded thin and laid flat.
        const size = 4.4;
        const r = 0.8;
        const h = size / 2;
        const shape = new THREE.Shape();
        shape.moveTo(-h + r, -h);
        shape.lineTo(h - r, -h);
        shape.quadraticCurveTo(h, -h, h, -h + r);
        shape.lineTo(h, h - r);
        shape.quadraticCurveTo(h, h, h - r, h);
        shape.lineTo(-h + r, h);
        shape.quadraticCurveTo(-h, h, -h, h - r);
        shape.lineTo(-h, -h + r);
        shape.quadraticCurveTo(-h, -h, -h + r, -h);
        const plateGeo = new THREE.ExtrudeGeometry(shape, {
          depth: 0.07,
          bevelEnabled: true,
          bevelSize: 0.03,
          bevelThickness: 0.03,
          bevelSegments: 4,
          curveSegments: 32,
        });
        plateGeo.rotateX(-Math.PI / 2);
        const edgeGeo = new THREE.EdgesGeometry(plateGeo, 30);

        const group = new THREE.Group();
        scene.add(group);
        const gap = 1.35;
        const y0 = -gap * 1.5;
        const plates = layers.map((l) => {
          const mat = new THREE.MeshPhysicalMaterial({
            color: l.hex,
            transparent: true,
            opacity: l.opacity,
            roughness: 0.1,
            metalness: 0.05,
            clearcoat: 1,
            side: THREE.DoubleSide,
          });
          const mesh = new THREE.Mesh(plateGeo, mat);
          const edgeMat = new THREE.LineBasicMaterial({ color: 0x1d1d1f, transparent: true, opacity: 0.16 });
          mesh.add(new THREE.LineSegments(edgeGeo, edgeMat));
          group.add(mesh);
          return { mesh, mat, edgeMat, base: l.opacity };
        });

        // Techpoint mark (pill and point) drawn onto the top plate.
        const markCanvas = document.createElement("canvas");
        markCanvas.width = markCanvas.height = 512;
        const ctx = markCanvas.getContext("2d")!;
        ctx.strokeStyle = "#1f5eff";
        ctx.lineWidth = 30;
        ctx.beginPath();
        ctx.roundRect(120, 110, 272, 96, 48);
        ctx.stroke();
        for (const [radius, fill] of [[74, "#1d1d1f"], [48, "#ffffff"], [28, "#1f5eff"]] as const) {
          ctx.fillStyle = fill;
          ctx.beginPath();
          ctx.arc(256, 350, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        const markTex = new THREE.CanvasTexture(markCanvas);
        const markMat = new THREE.MeshBasicMaterial({ map: markTex, transparent: true, toneMapped: false });
        const mark = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.2), markMat);
        mark.rotation.x = -Math.PI / 2;
        mark.position.y = 0.12;
        plates[3].mesh.add(mark);

        // Vertical connectors with signals travelling up between the layers.
        const connectors = new THREE.Group();
        group.add(connectors);
        const lineMat = new THREE.LineBasicMaterial({ color: 0x1f5eff, transparent: true, opacity: 0.5 });
        const dotGeo = new THREE.SphereGeometry(0.06, 16, 16);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0x1f5eff });
        const signals = [[-1.4, -1.4], [1.4, -1.4], [1.4, 1.4], [-1.4, 1.4], [0, 0]].map(([x, z], i) => {
          const pts = [new THREE.Vector3(x, y0, z), new THREE.Vector3(x, -y0 + 0.05, z)];
          connectors.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
          const dot = new THREE.Mesh(dotGeo, dotMat);
          connectors.add(dot);
          return { dot, x, z, phase: i * 0.21 };
        });

        // Soft contact shadow.
        const shadowCanvas = document.createElement("canvas");
        shadowCanvas.width = shadowCanvas.height = 256;
        const sctx = shadowCanvas.getContext("2d")!;
        const grad = sctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        grad.addColorStop(0, "rgba(11,18,60,0.26)");
        grad.addColorStop(1, "rgba(11,18,60,0)");
        sctx.fillStyle = grad;
        sctx.fillRect(0, 0, 256, 256);
        const shadowMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(shadowCanvas), transparent: true, depthWrite: false });
        const shadow = new THREE.Mesh(new THREE.PlaneGeometry(8, 5), shadowMat);
        shadow.rotation.x = -Math.PI / 2;
        shadow.position.y = -3.5;
        scene.add(shadow);

        const resize = () => {
          const w = wrap.clientWidth;
          const hgt = wrap.clientHeight;
          renderer.setSize(w, hgt, false);
          camera.aspect = w / hgt;
          camera.updateProjectionMatrix();
        };
        resize();

        const tmp = new THREE.Vector3();
        let scroll = 0;
        const draw = (t: number) => {
          const rect = wrap.getBoundingClientRect();
          const target = reduce ? 0 : clamp((window.innerHeight * 0.4 - rect.top) / rect.height);
          scroll += (target - scroll) * 0.08;

          // Narrow screens: pull the camera back so the stack keeps its margins.
          const narrow = camera.aspect < 1.3;
          camera.position.set(0, 0.6, narrow ? 23 : 21);
          camera.lookAt(0, 0, 0);

          const breathe = reduce ? 1 : 1 + 0.09 * Math.sin((t - 2.6) * 0.9) * ease((t - 2.6) / 1.2);
          const spread = breathe + scroll * 0.34;
          group.scale.setScalar(0.88 - scroll * 0.06);
          group.position.set(0, 0.25, 0);
          group.rotation.set(0.5 - scroll * 0.1, 0.72 + (reduce ? 0 : Math.sin(t * 0.45) * 0.1) + scroll * 0.9, 0);

          const w = wrap.clientWidth;
          const hgt = wrap.clientHeight;
          const offset = Math.min(395, w * 0.3);
          plates.forEach((p, i) => {
            const k = ease((t - 0.25 - i * 0.45) / 0.9);
            const bob = reduce ? 0 : Math.sin(t * 1.1 + i * 0.7) * 0.04 * k;
            p.mesh.position.set(0, (y0 + i * gap) * spread + (1 - k) * 3.2 + bob, 0);
            p.mat.opacity = p.base * k;
            p.edgeMat.opacity = 0.16 * k;
            p.mesh.visible = k > 0;

            const chip = chipRefs.current[i];
            if (chip) {
              tmp.set(0, 0, 0);
              p.mesh.localToWorld(tmp);
              tmp.project(camera);
              const x = ((tmp.x + 1) / 2) * w + (i % 2 ? -1 : 1) * offset;
              const y = ((1 - tmp.y) / 2) * hgt;
              chip.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
              chip.style.opacity = String(ease((t - 0.9 - i * 0.45) / 0.5) * (1 - clamp(scroll * 2.2)));
            }
          });

          markMat.opacity = ease((t - 2.3) / 0.6);
          const c = ease((t - 2) / 0.8);
          lineMat.opacity = 0.5 * c;
          connectors.scale.y = spread;
          signals.forEach((s) => {
            s.dot.visible = c > 0.5 && !reduce;
            s.dot.position.set(s.x, y0 + ((t * 0.4 + s.phase) % 1) * (-2 * y0), s.z);
          });
          shadowMat.opacity = ease(t / 1.2);
          renderer.render(scene, camera);
        };

        let raf = 0;
        let visible = true;
        const start = performance.now();
        const loop = () => {
          raf = 0;
          if (!visible || document.hidden) return;
          draw((performance.now() - start) / 1000);
          raf = requestAnimationFrame(loop);
        };
        const wake = () => {
          if (reduce) draw(100);
          else if (!raf) raf = requestAnimationFrame(loop);
        };

        const io = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          wake();
        });
        io.observe(wrap);
        const ro = new ResizeObserver(() => {
          resize();
          wake();
        });
        ro.observe(wrap);
        document.addEventListener("visibilitychange", wake);
        wake();
        canvas.dataset.ready = "true";

        cleanup = () => {
          cancelAnimationFrame(raf);
          io.disconnect();
          ro.disconnect();
          document.removeEventListener("visibilitychange", wake);
          scene.traverse((o) => {
            const m = o as { geometry?: { dispose(): void }; material?: { dispose(): void } };
            m.geometry?.dispose();
            m.material?.dispose();
          });
          markTex.dispose();
          pmrem.dispose();
          renderer.dispose();
        };
        if (disposed) cleanup();
      } catch {
        if (!disposed) setFailed(true);
      }
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  const poster = (
    <Image
      src="/images/layer-stack.png"
      alt="Four stacked technology layers: cloud and security, data, software, and AI and automation"
      width={860}
      height={437}
      className="absolute top-1/2 left-1/2 w-[min(860px,150%)] max-w-none -translate-x-1/2 -translate-y-1/2"
    />
  );

  return (
    <div>
      <div ref={wrapRef} className="relative mx-auto h-[330px] w-full max-w-[1440px] overflow-hidden sm:h-[520px] lg:h-[620px]">
        {failed ? (
          poster
        ) : (
          <canvas ref={canvasRef} aria-hidden="true" className="block size-full opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100" />
        )}
        <noscript>{poster}</noscript>
        {!failed &&
          layers.map((l, i) => (
            <div
              key={l.name}
              ref={(el) => {
                chipRefs.current[i] = el;
              }}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 hidden items-center gap-3 rounded-[18px] bg-white/70 py-2.5 pr-4 pl-3 whitespace-nowrap opacity-0 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_12px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150 md:flex"
            >
              <span className="size-[26px] shrink-0 rounded-lg ring-1 ring-black/10 ring-inset" style={{ background: l.color }} />
              <span>
                <span className="block text-[15px] leading-tight font-semibold tracking-[-0.01em] text-[#1d1d1f]">{l.name}</span>
                <span className="block text-[12.5px] leading-tight text-[#6e6e73]">{l.sub}</span>
              </span>
            </div>
          ))}
      </div>

      {/* The same four layers as a readable list: the only legend on phones, and the text alternative everywhere. */}
      <ul className="container-x grid grid-cols-2 gap-2.5 md:sr-only">
        {[...layers].reverse().map((l) => (
          <li key={l.name} className="flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2.5 ring-1 ring-black/[0.06]">
            <span className="size-5 shrink-0 rounded-md ring-1 ring-black/10 ring-inset" style={{ background: l.color }} />
            <span>
              <span className="block text-[13.5px] leading-tight font-semibold text-[#1d1d1f]">{l.name}</span>
              <span className="block text-[12px] leading-tight text-[#6e6e73]">{l.sub}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

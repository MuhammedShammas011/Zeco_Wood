import { useEffect, useRef, useState } from 'react';

export default function ParticleText({
  text = "",
  particleColor = "#106031", // ZecoWood green
  particleSize = 1.5,
  particleDensity = 3,
  mouseRadius = 80,
  returnSpeed = 0.08,
  className = "",
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef();

  // Draw text and generate particles
  const initParticles = () => {
    const container = containerRef.current;
    const textEl = textRef.current;
    const canvas = canvasRef.current;
    if (!container || !textEl || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Get exact computed styles from the real text element
    const computedStyle = window.getComputedStyle(textEl);
    const fontSize = parseFloat(computedStyle.fontSize);
    const fontWeight = computedStyle.fontWeight;
    const fontFamily = computedStyle.fontFamily;
    const lineHeight = parseFloat(computedStyle.lineHeight) || (fontSize * 1.2);
    
    // Set canvas dimensions
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Draw text to offscreen canvas to get pixel data
    const offscreen = document.createElement("canvas");
    offscreen.width = rect.width * dpr;
    offscreen.height = rect.height * dpr;
    const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
    offCtx.scale(dpr, dpr);

    offCtx.fillStyle = particleColor;
    offCtx.textAlign = computedStyle.textAlign || "left";
    offCtx.textBaseline = "top";
    offCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;

    // Calculate horizontal start position based on text alignment
    let textX = 0;
    if (offCtx.textAlign === "center") {
      textX = rect.width / 2;
    } else if (offCtx.textAlign === "right") {
      textX = rect.width;
    }

    // Split text by lines
    const lines = text.split('\n');
    lines.forEach((line, index) => {
      offCtx.fillText(line, textX, index * lineHeight);
    });

    // Extract pixels
    const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
    const pixels = imageData.data;
    const particles = [];
    const gap = Math.max(2, particleDensity);

    for (let y = 0; y < offscreen.height; y += gap) {
      for (let x = 0; x < offscreen.width; x += gap) {
        const index = (y * offscreen.width + x) * 4;
        const alpha = pixels[index + 3];
        if (alpha > 128) { // Only take solid pixels
          const px = x / dpr;
          const py = y / dpr;
          particles.push({
            x: px,
            y: py,
            baseX: px,
            baseY: py,
            vx: 0,
            vy: 0
          });
        }
      }
    }

    particlesRef.current = particles;
  };

  // Handle Resize
  useEffect(() => {
    // Initial draw
    const timeout = setTimeout(initParticles, 100);

    // Redraw on resize
    const observer = new ResizeObserver(() => {
      initParticles();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [text, particleColor, particleDensity]);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      ctx.fillStyle = particleColor;
      ctx.beginPath();

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Push particles away
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 2;
          particle.vy -= Math.sin(angle) * force * 2;
        }

        // Return to base
        particle.vx += (particle.baseX - particle.x) * returnSpeed;
        particle.vy += (particle.baseY - particle.y) * returnSpeed;

        // Damping
        particle.vx *= 0.85;
        particle.vy *= 0.85;

        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.moveTo(particle.x, particle.y);
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
      }
      ctx.fill();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleColor, particleSize, mouseRadius, returnSpeed]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <div 
      ref={containerRef} 
      style={{ position: 'relative', width: '100%' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Real accessible text (visually hidden but maintains layout and SEO) */}
      <h2 
        ref={textRef} 
        className={className} 
        style={{ 
          color: 'transparent', 
          userSelect: 'none',
          whiteSpace: 'pre-wrap', 
          margin: 0
        }}
      >
        {text}
      </h2>
      
      {/* Canvas Overlay for Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ExternalLink, 
  Play, 
  MessageCircle, 
  Instagram, 
  Mail, 
  Copy, 
  Check, 
  X, 
  Maximize2, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Film, 
  Globe, 
  Smartphone,
  ChevronRight
} from 'lucide-react';

// ============================================================================
// 📌 EASY CONFIGURATION SECTION: PUT YOUR FINAL DEMO LINKS & VIDEOS HERE!
// ============================================================================
export const AZAM_CONFIG = {
  // 1. THREE WEBSITE DEMOS (UPDATED WITH YOUR LIVE DEMO URLS!)
  websiteDemos: [
    {
      id: 'web-1',
      title: 'Aurel Estates — Luxury Real Estate',
      category: 'Real Estate & Property',
      description: 'A more considered way to find home. High-end real estate portal with sleek spatial visualization and immersive gallery.',
      tags: ['React', 'Spatial UI', 'Vercel', 'Tailwind'],
      previewUrl: 'https://aurel-estate-opal.vercel.app',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      metrics: 'Live Demo • Aurel Estates'
    },
    {
      id: 'web-2',
      title: 'Aurel Dental Studio',
      category: 'Medical & Dental Clinic',
      description: 'Modern medical booking experience featuring clean patient-centric design, instant appointments, and clinic services visualizer.',
      tags: ['Next.js', 'Healthcare', 'Smooth Motion', 'UX'],
      previewUrl: 'https://dentist-sit-la88.vercel.app/',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
      metrics: 'Live Demo • Dental Clinic'
    },
    {
      id: 'web-3',
      title: 'Aurel Fitness & Gym',
      category: 'Fitness & Health Club',
      description: 'High-energy fitness platform with workout program showcases, dynamic membership tiers, and modern performance aesthetic.',
      tags: ['React', 'Fitness SaaS', 'Interactive', 'WebGL'],
      previewUrl: 'https://fitness-site-fqrj.vercel.app/#',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      metrics: 'Live Demo • Gym Site'
    }
  ],

  // 2. THREE AI UGC VIDEO DEMOS (UPDATED WITH YOUR EXACT ADS!)
  aiUgcDemos: [
    {
      id: 'ugc-1',
      title: 'AERA Skincare UGC Ad',
      client: 'AERA Beauty',
      category: 'Beauty & Skincare UGC',
      duration: 'Shorts',
      thumbnail: 'https://img.youtube.com/vi/KMpvfphI_Ow/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/KMpvfphI_Ow?autoplay=1',
      youtubeId: 'KMpvfphI_Ow',
      stats: 'AERA Skincare Routine • Glowing Skin'
    },
    {
      id: 'ugc-2',
      title: 'KIVO Kitchen Mixer UGC Ad',
      client: 'KIVO Kitchen Tech',
      category: 'Home & Kitchen UGC',
      duration: 'Shorts',
      thumbnail: 'https://img.youtube.com/vi/uQRmKWCN5_I/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/uQRmKWCN5_I?autoplay=1',
      youtubeId: 'uQRmKWCN5_I',
      stats: 'Powerful Mixer • High CTR'
    },
    {
      id: 'ugc-3',
      title: 'POPP Food UGC Ad',
      client: 'POPP Snacks',
      category: 'Food & Beverage UGC',
      duration: 'Shorts',
      thumbnail: 'https://img.youtube.com/vi/dZj7ue8s_yw/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dZj7ue8s_yw?autoplay=1',
      youtubeId: 'dZj7ue8s_yw',
      stats: 'Mouth-Watering • Viral Campaign'
    }
  ],

  // 3. CONTACT DIRECT CHANNELS (UPDATED WITH YOUR REAL DETAILS!)
  contacts: [
    {
      id: 'whatsapp',
      label: 'Direct WhatsApp',
      value: '+91 9589934668',
      link: 'https://wa.me/919589934668',
      icon: MessageCircle
    },
    {
      id: 'instagram',
      label: 'Instagram Visuals',
      value: '@azamdigi_',
      link: 'https://www.instagram.com/azamdigi_?mdxt=MWI1OTZiOGdtdmd6dQ==',
      icon: Instagram
    },
    {
      id: 'gmail',
      label: 'Official Inquiries',
      value: 'azamishere4u@gmail.com',
      link: 'mailto:azamishere4u@gmail.com',
      icon: Mail
    }
  ]
};

// Inject Luxury Fonts
if (typeof document !== 'undefined') {
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&family=Sora:wght@300;400;600;700;800&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
}

// Ultra-Performance Dynamic 3D WebGL Engine (Mobile & Touch Optimized)
const Luxury3DEngine = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Dynamic Interaction State (Mouse & Touch Drag Inertia)
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / height - 0.5) * 2;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        targetX = ((e.touches[0].clientX - rect.left) / width - 0.5) * 2.5;
        targetY = ((e.touches[0].clientY - rect.top) / height - 0.5) * 2.5;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 10 : 18;

    // Build 3D Facets & Metallic Chrome Structures
    const objects = Array.from({ length: count }).map((_, i) => ({
      x: (Math.random() - 0.5) * (width * (isMobile ? 0.9 : 0.75)),
      y: (Math.random() - 0.5) * (height * 0.8),
      z: Math.random() * 400 + 40,
      size: Math.random() * (isMobile ? 32 : 55) + (isMobile ? 22 : 35),
      rotX: Math.random() * Math.PI * 2,
      rotY: Math.random() * Math.PI * 2,
      rotZ: Math.random() * Math.PI * 2,
      speedX: (Math.random() - 0.5) * 0.008,
      speedY: (Math.random() - 0.5) * 0.008,
      speedZ: (Math.random() - 0.5) * 0.008,
      type: i % 3 === 0 ? 'glassSlate' : i % 3 === 1 ? 'chromeOrb' : 'blackPolygon'
    }));

    // Floating Embers
    const particles = Array.from({ length: isMobile ? 30 : 65 }).map(() => ({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      z: Math.random() * 600,
      size: Math.random() * 2.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.15
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth inertia motion
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      const centerX = width / 2 + currentX * 45;
      const centerY = height / 2 + currentY * 45;

      // Deep Red Ambient Glow Shader
      const bgGrad = ctx.createRadialGradient(
        centerX, centerY - 20, 10,
        centerX, centerY, width * (isMobile ? 0.85 : 0.6)
      );
      bgGrad.addColorStop(0, 'rgba(215, 53, 66, 0.18)');
      bgGrad.addColorStop(0.45, 'rgba(142, 24, 39, 0.06)');
      bgGrad.addColorStop(1, 'rgba(9, 9, 9, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Crimson Particles
      particles.forEach(p => {
        p.y -= 0.35;
        if (p.y < -height / 2) p.y = height / 2;
        const scale = 350 / (350 + p.z);
        const px = centerX + p.x * scale;
        const py = centerY + p.y * scale;

        ctx.fillStyle = `rgba(215, 53, 66, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Sort objects by depth for true 3D perspective layering
      const sorted = [...objects].sort((a, b) => b.z - a.z);

      sorted.forEach((obj) => {
        obj.rotX += obj.speedX;
        obj.rotY += obj.speedY;
        obj.rotZ += obj.speedZ;

        const fov = 380;
        const scale = fov / (fov + obj.z);
        const projectedX = centerX + obj.x * scale;
        const projectedY = centerY + obj.y * scale;
        const projectedSize = obj.size * scale;

        ctx.save();
        ctx.translate(projectedX, projectedY);
        ctx.rotate(obj.rotZ + currentX * 0.2);

        if (obj.type === 'glassSlate') {
          // Reflective Dark Glass Slate with Signature Red Edge
          const pWidth = projectedSize * 2.2;
          const pHeight = projectedSize * 1.4;

          const rimGrad = ctx.createLinearGradient(-pWidth/2, -pHeight/2, pWidth/2, pHeight/2);
          rimGrad.addColorStop(0, '#D73542');
          rimGrad.addColorStop(0.4, '#30292A');
          rimGrad.addColorStop(1, '#8E1827');

          ctx.strokeStyle = rimGrad;
          ctx.lineWidth = 1.8 * scale;
          ctx.fillStyle = 'rgba(28, 26, 26, 0.85)';

          ctx.beginPath();
          ctx.roundRect(-pWidth/2, -pHeight/2, pWidth, pHeight, 10 * scale);
          ctx.fill();
          ctx.stroke();

          // Glass Highlight Reflection
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.beginPath();
          ctx.moveTo(-pWidth/2, -pHeight/2);
          ctx.lineTo(-pWidth/8, -pHeight/2);
          ctx.lineTo(-pWidth/3, pHeight/2);
          ctx.lineTo(-pWidth/2, pHeight/2);
          ctx.closePath();
          ctx.fill();

          // Crimson Glowing Indicator
          ctx.fillStyle = '#D73542';
          ctx.shadowColor = '#D73542';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(pWidth/2 - 12 * scale, -pHeight/2 + 12 * scale, 2.5 * scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (obj.type === 'chromeOrb') {
          // Glossy Metallic Sphere with Red Rim Reflection
          const s = projectedSize * 0.8;
          const orbGrad = ctx.createRadialGradient(-s*0.3, -s*0.3, s*0.1, 0, 0, s);
          orbGrad.addColorStop(0, '#FFFFFF');
          orbGrad.addColorStop(0.2, '#A5A0A0');
          orbGrad.addColorStop(0.5, '#1C1A1A');
          orbGrad.addColorStop(0.85, '#090909');
          orbGrad.addColorStop(1, '#D73542');

          ctx.fillStyle = orbGrad;
          ctx.beginPath();
          ctx.arc(0, 0, s, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#30292A';
          ctx.stroke();
        } else {
          // Black Chrome Facet Polyhedron
          const s = projectedSize;
          const chromeGrad = ctx.createLinearGradient(-s, -s, s, s);
          chromeGrad.addColorStop(0, '#423E3E');
          chromeGrad.addColorStop(0.3, '#141414');
          chromeGrad.addColorStop(0.6, '#F1ECEB');
          chromeGrad.addColorStop(0.8, '#1C1A1A');
          chromeGrad.addColorStop(1, '#8E1827');

          ctx.fillStyle = chromeGrad;
          ctx.strokeStyle = '#30292A';
          ctx.lineWidth = 1 * scale;

          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.95, -s * 0.25);
          ctx.lineTo(s * 0.65, s * 0.95);
          ctx.lineTo(-s * 0.85, s * 0.75);
          ctx.lineTo(-s * 0.95, -0.25 * s);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Signature Crimson Light Rim Accent
          ctx.strokeStyle = '#D73542';
          ctx.lineWidth = 2 * scale;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.95, -s * 0.25);
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

// Main Single Page Application Component
export default function AzamDigiApp() {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedWebModal, setSelectedWebModal] = useState(null);
  const [selectedVideoModal, setSelectedVideoModal] = useState(null);

  // Smooth mouse tilt logic for Desktop & Touch cards
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#090909] text-[#F1ECEB] font-['DM_Sans'] antialiased selection:bg-[#8E1827] selection:text-white relative overflow-x-hidden">
      
      {/* Visual Mesh & Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#F1ECEB_1px,transparent_1px)] [background-size:16px_16px] z-50" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] bg-[#8E1827]/12 blur-[150px] pointer-events-none rounded-full" />

      {/* Header Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#090909]/85 border-b border-[#30292A]/70 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-[#1C1A1A] border border-[#30292A] flex items-center justify-center shadow-lg group-hover:border-[#D73542] transition-colors">
              <span className="font-['Sora'] font-extrabold text-[#D73542] text-xl tracking-tighter">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Sora'] font-bold text-base sm:text-lg tracking-wider text-[#F1ECEB] group-hover:text-white transition-colors">
                AZAM DIGI
              </span>
              <span className="text-[9px] text-[#777171] uppercase tracking-widest font-semibold">
                Creative Studio
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-[#A5A0A0] uppercase">
            <a href="#demos" className="hover:text-[#F1ECEB] transition-colors">Websites</a>
            <a href="#ugc" className="hover:text-[#F1ECEB] transition-colors">AI UGC</a>
            <a href="#contact" className="hover:text-[#F1ECEB] transition-colors">Contact</a>
          </nav>

          <a 
            href="#contact" 
            className="px-4 sm:px-5 py-2.5 rounded text-xs font-semibold font-['Sora'] uppercase tracking-wider text-[#F1ECEB] bg-[#1C1A1A] border border-[#30292A] hover:border-[#D73542] transition-all duration-300 shadow-md flex items-center gap-2 group"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D73542] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* 1. COMPACT HERO SECTION */}
        <section id="hero" className="relative min-h-[80vh] flex items-center py-16 overflow-hidden border-b border-[#30292A]">
          <Luxury3DEngine />
          
          <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
            <div className="max-w-3xl">
              
              {/* Minimal Red Accent Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1C1A1A] border border-[#30292A] text-[11px] text-[#A5A0A0] mb-6 shadow-inner"
              >
                <span className="w-2 h-2 rounded-full bg-[#D73542] animate-pulse" />
                <span className="font-['Sora'] font-semibold text-[#F1ECEB]">AZAM DIGI PORTFOLIO</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-['Sora'] font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#F1ECEB] mb-6"
              >
                Crafting High-Impact <br />
                <span className="font-['Instrument_Serif'] font-normal italic text-[#D73542] pr-2">Websites & AI UGC</span>
                Experiences.
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-[#A5A0A0] max-w-xl leading-relaxed mb-8 font-normal"
              >
                AZAM DIGI delivers luxury web platforms and realistic AI-synthesized video performers designed to scale modern brands globally.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <a 
                  href="#demos"
                  className="px-7 py-4 rounded bg-[#D73542] hover:bg-[#8E1827] text-white font-['Sora'] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(215,53,66,0.35)] hover:shadow-[0_0_35px_rgba(215,53,66,0.55)] flex items-center justify-center gap-2.5 group"
                >
                  <span>Explore Work</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <a 
                  href="#contact"
                  className="px-7 py-4 rounded bg-[#1C1A1A] hover:bg-[#252222] border border-[#30292A] text-[#F1ECEB] font-['Sora'] font-semibold text-xs tracking-wider uppercase transition-all duration-300 text-center"
                >
                  Contact Studio
                </a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. THREE WEBSITE DEMOS SECTION */}
        <section id="demos" className="py-24 border-b border-[#30292A] relative bg-[#090909]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="flex items-center gap-2 text-[#D73542] text-xs font-['Sora'] font-bold uppercase tracking-widest mb-3">
                  <Globe className="w-4 h-4" />
                  <span>Interactive Architecture</span>
                </div>
                <h2 className="font-['Sora'] text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1ECEB]">
                  Featured <span className="font-['Instrument_Serif'] italic font-normal text-[#D73542]">Web Demos</span>
                </h2>
              </div>
              <p className="text-[#A5A0A0] text-xs sm:text-sm max-w-xs leading-relaxed">
                Precision web frameworks tailored for high conversion rates and immersive 3D presentation.
              </p>
            </div>

            {/* Demos Grid */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {AZAM_CONFIG.websiteDemos.map((demo, index) => (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                  }}
                  className="group relative bg-[#1C1A1A] rounded-lg border border-[#30292A] hover:border-[#D73542]/70 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl"
                >
                  {/* Browser Top Header */}
                  <div className="px-4 py-3 bg-[#141414] border-b border-[#30292A] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#30292A]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#30292A]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#30292A]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#777171] uppercase">
                      {demo.metrics}
                    </span>
                  </div>

                  {/* Image Viewport */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#141414]">
                    <img 
                      src={demo.image} 
                      alt={demo.title}
                      className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A1A] via-transparent to-transparent opacity-80" />
                    
                    {/* Tags */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                      {demo.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#090909]/90 border border-[#30292A] text-[#A5A0A0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-['Sora'] font-semibold text-[#D73542] uppercase tracking-wider block mb-2">
                        {demo.category}
                      </span>
                      <h3 className="font-['Sora'] text-lg font-bold text-[#F1ECEB] group-hover:text-white transition-colors mb-2">
                        {demo.title}
                      </h3>
                      <p className="text-xs text-[#A5A0A0] leading-relaxed mb-6">
                        {demo.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedWebModal(demo)}
                      className="w-full py-3 rounded bg-[#252222] hover:bg-[#D73542] text-[#F1ECEB] hover:text-white text-xs font-['Sora'] font-semibold tracking-wider uppercase border border-[#30292A] hover:border-[#D73542] transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Preview Demo</span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#A5A0A0] group-hover/btn:text-white transition-colors" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. THREE AI UGC VIDEO DEMOS SECTION */}
        <section id="ugc" className="py-24 border-b border-[#30292A] bg-[#141414] relative">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="flex items-center gap-2 text-[#D73542] text-xs font-['Sora'] font-bold uppercase tracking-widest mb-3">
                  <Film className="w-4 h-4" />
                  <span>Synthetic Creators</span>
                </div>
                <h2 className="font-['Sora'] text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1ECEB]">
                  AI UGC <span className="font-['Instrument_Serif'] italic font-normal text-[#D73542]">Performers</span>
                </h2>
              </div>
              <p className="text-[#A5A0A0] text-xs sm:text-sm max-w-xs leading-relaxed">
                Hyper-realistic digital ambassadors engineered for social growth and conversion velocity.
              </p>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {AZAM_CONFIG.aiUgcDemos.map((ugc, index) => (
                <motion.div
                  key={ugc.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group relative bg-[#1C1A1A] rounded-lg border border-[#30292A] hover:border-[#D73542]/70 overflow-hidden transition-all duration-500 shadow-xl"
                >
                  {/* Phone Aspect Viewport */}
                  <div className="relative aspect-[9/16] w-full bg-[#090909] overflow-hidden">
                    <img 
                      src={ugc.thumbnail} 
                      alt={ugc.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A1A] via-transparent to-black/30" />

                    {/* Header Tags */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-[#090909]/80 backdrop-blur-md border border-[#30292A] text-[10px] font-mono text-[#F1ECEB]">
                        {ugc.stats}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#8E1827] text-white text-[10px] font-mono">
                        {ugc.duration}
                      </span>
                    </div>

                    {/* Play Button Overlay */}
                    <button
                      onClick={() => setSelectedVideoModal(ugc)}
                      className="absolute inset-0 flex items-center justify-center group/play cursor-pointer"
                      aria-label="Play AI UGC Video"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#D73542] text-white flex items-center justify-center shadow-[0_0_30px_rgba(215,53,66,0.6)] group-hover/play:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </div>
                    </button>
                  </div>

                  {/* Footer Info */}
                  <div className="p-5 bg-[#1C1A1A] border-t border-[#30292A]">
                    <span className="text-[10px] font-mono text-[#777171] uppercase tracking-wider block mb-1">
                      {ugc.client}
                    </span>
                    <h3 className="font-['Sora'] text-base font-bold text-[#F1ECEB] group-hover:text-[#D73542] transition-colors">
                      {ugc.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CONTACT LINKS SECTION */}
        <section id="contact" className="py-24 relative bg-[#090909]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="max-w-4xl mx-auto bg-[#1C1A1A] rounded-xl border border-[#30292A] p-6 sm:p-12 relative overflow-hidden shadow-2xl">
              
              {/* Red Glow Light */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#8E1827]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 text-center max-w-xl mx-auto mb-10">
                <span className="text-xs font-['Sora'] font-bold text-[#D73542] uppercase tracking-widest block mb-2">
                  Direct Channel
                </span>
                <h2 className="font-['Sora'] text-2xl sm:text-4xl font-bold text-[#F1ECEB] mb-3">
                  Initiate a <span className="font-['Instrument_Serif'] italic font-normal text-[#D73542]">Project</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#A5A0A0] leading-relaxed">
                  Reach out directly via WhatsApp, Instagram, or Email to discuss custom web engineering or AI video campaigns.
                </p>
              </div>

              {/* Channels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
                {AZAM_CONFIG.contacts.map((method) => {
                  const Icon = method.icon;
                  const isCopied = copiedId === method.id;

                  return (
                    <div
                      key={method.id}
                      className="bg-[#141414] rounded-lg border border-[#30292A] p-5 flex flex-col justify-between hover:border-[#D73542]/60 transition-all duration-300 group"
                    >
                      <div>
                        <div className="w-10 h-10 rounded bg-[#252222] border border-[#30292A] flex items-center justify-center text-[#D73542] mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-['Sora'] text-sm font-semibold text-[#F1ECEB] mb-1">
                          {method.label}
                        </h3>
                        <p className="text-xs text-[#777171] font-mono break-all mb-6">
                          {method.value}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 rounded bg-[#252222] hover:bg-[#D73542] text-xs font-['Sora'] font-semibold text-[#F1ECEB] hover:text-white transition-colors duration-200 text-center flex items-center justify-center gap-1.5"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        <button
                          onClick={() => handleCopy(method.value, method.id)}
                          className="p-2.5 rounded bg-[#252222] hover:bg-[#30292A] text-[#A5A0A0] hover:text-white border border-[#30292A] transition-colors cursor-pointer"
                          title="Copy Link"
                          aria-label="Copy to clipboard"
                        >
                          {isCopied ? <Check className="w-4 h-4 text-[#D73542]" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#30292A] bg-[#090909] py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777171]">
          <div className="flex items-center gap-2">
            <span className="font-['Sora'] font-bold text-[#F1ECEB]">AZAM DIGI</span>
            <span>© {new Date().getFullYear()} All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Dark Luxury Edition</span>
            <span>•</span>
            <span className="text-[#A5A0A0]">AZAM DIGI Studio</span>
          </div>
        </div>
      </footer>

      {/* WEBSITE DEMO MODAL */}
      <AnimatePresence>
        {selectedWebModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#090909]/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1C1A1A] border border-[#30292A] rounded-xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl relative"
            >
              <div className="px-5 py-3.5 bg-[#141414] border-b border-[#30292A] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D73542]" />
                  <span className="text-xs font-mono text-[#F1ECEB] truncate">
                    {selectedWebModal.title}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a 
                    href={selectedWebModal.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-[#D73542] hover:bg-[#8E1827] text-white text-xs font-['Sora'] font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>Launch Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button 
                    onClick={() => setSelectedWebModal(null)}
                    className="p-1.5 rounded hover:bg-[#252222] text-[#A5A0A0] hover:text-white cursor-pointer transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Live Interactive Web Viewport */}
              <div className="w-full flex-1 bg-[#090909] relative">
                <iframe 
                  src={selectedWebModal.previewUrl}
                  title={selectedWebModal.title}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI UGC VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {selectedVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090909]/95 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm bg-[#1C1A1A] border border-[#30292A] rounded-xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-3.5 bg-[#141414] border-b border-[#30292A] flex items-center justify-between">
                <div>
                  <h4 className="font-['Sora'] text-xs font-bold text-[#F1ECEB]">
                    {selectedVideoModal.title}
                  </h4>
                  <span className="text-[9px] text-[#D73542] font-mono">
                    {selectedVideoModal.category}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedVideoModal(null)}
                  className="p-1.5 rounded bg-[#252222] hover:bg-[#30292A] text-[#A5A0A0] hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-[9/16] w-full bg-[#090909]">
                <iframe 
                  src={selectedVideoModal.videoUrl}
                  title={selectedVideoModal.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
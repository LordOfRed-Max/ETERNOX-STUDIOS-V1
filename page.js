'use client';
import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import gsap from 'gsap';

// 👑 DAILY CONFIGURATION MATRIX
const MASTER_PROJECTS_DATA = {
  past: [
    { name: "Ancient Lord of Red Core", details: "The initial dark fantasy visualization nexus.", link: "https://your-past-project-link.com" },
    { name: "Eternox Alpha Portal", details: "First HTML dynamic portal deployment.", link: "#" }
  ],
  current: [
    { name: "Eternox 3D Infinite Realm", details: "Building the absolute premium Next.js + Three.js master website right now." },
    { name: "Deep Space Fist Mechanics", details: "Developing the internal physics engine for cosmic impact techniques." }
  ],
  future: [
    { name: "Eternox Endless Prison Simulation", details: "A complete visual expansion of the absolute isolation magic technique." },
    { name: "12 Elemental Champions Cinematic", details: "An elite production roadmap for the elemental entities guarding the throne." },
    { name: "Tamil Cinema Music Visualizer", details: "An AI-driven high-bass visualizer syncing tracks with midnight purple auras." }
  ]
};

// 🔮 3D VOID BLACK HOLE INJECTOR
function VoidBlackHole({ isSingularity }) {
  const holeRef = useRef();
  const discRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    discRef.current.rotation.z = t * 0.7;
    if (isSingularity) {
      holeRef.current.scale.x = gsap.utils.interpolate(holeRef.current.scale.x, 25, 0.05);
      holeRef.current.scale.y = gsap.utils.interpolate(holeRef.current.scale.y, 25, 0.05);
    }
  });

  return (
    <group ref={holeRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh ref={discRef} position={[0, 0, -0.1]}>
        <ringGeometry args={[0.8, 2.5, 64]} />
        <meshBasicMaterial color="#3a0066" side={2} transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export default function Home() {
  const [stage, setStage] = useState('intro'); // intro -> vortex -> main
  const [activeTab, setActiveTab] = useState(null);
  const [showProjectsHub = false, setShowProjectsHub] = useState(false);
  const [isSingularity, setIsSingularity] = useState(false);
  
  // ⚡ NEXUS INTERACTIVE CONTROL STATES
  const [activeLog, setActiveLog] = useState(null);
  const [showSecretConsole, setShowSecretConsole] = useState(false);
  const [secretInput, setSecretInput] = useState("");
  const [consoleStatus, setConsoleStatus] = useState("AWAITING OVERRIDE KEY...");
  const [isSecretRealmActive, setIsSecretRealmActive] = useState(false);

  const introCanvasRef = useRef();
  const mainRealmRef = useRef();
  const projectsSectionRef = useRef();

  const playCosmicVoidAudio = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const rumbleOsc = ctx.createOscillator();
    const rumbleGain = ctx.createGain();
    rumbleOsc.type = 'sine';
    rumbleOsc.frequency.setValueAtTime(28, ctx.currentTime);
    rumbleGain.gain.setValueAtTime(0.8, ctx.currentTime);
    rumbleGain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 3.5);
    rumbleOsc.connect(rumbleGain);
    rumbleGain.connect(ctx.destination);
    rumbleOsc.start(); rumbleOsc.stop(ctx.currentTime + 3.5);

    const synthOsc = ctx.createOscillator();
    const synthGain = ctx.createGain();
    synthOsc.type = 'triangle';
    synthOsc.frequency.setValueAtTime(70, ctx.currentTime);
    synthOsc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 2.0);
    synthGain.gain.setValueAtTime(0.3, ctx.currentTime);
    synthGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.0);
    synthOsc.connect(synthGain);
    synthGain.connect(ctx.destination);
    synthOsc.start(); synthOsc.stop(ctx.currentTime + 3.0);
  };

  const initiateRealmRebirth = () => {
    playCosmicVoidAudio();
    setIsSingularity(true);

    gsap.to(introCanvasRef.current, {
      x: () => Math.random() * 20 - 10,
      y: () => Math.random() * 20 - 10,
      duration: 0.05,
      repeat: 30,
      yoyo: true,
      onComplete: () => {
        gsap.to(introCanvasRef.current, { x: 0, y: 0, scale: 0, opacity: 0, duration: 0.8, ease: 'power2.in' });
        setTimeout(() => {
          setStage('main');
          setTimeout(() => {
            gsap.fromTo(mainRealmRef.current, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 1.8, ease: 'power3.out' });
          }, 100);
        }, 800);
      }
    });
  };

  // 🎯 NAVIGATION ACTIONS
  const scrollToProjects = () => {
    setShowProjectsHub(true);
    if (!activeTab) setActiveTab('current');
    setTimeout(() => {
      projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const resetToNexus = () => {
    setShowProjectsHub(false);
    setActiveLog(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🔐 SECRET STATUS COMMAND VALIDATOR
  const handleConsoleSubmit = (e) => {
    e.preventDefault();
    const key = secretInput.toUpperCase().trim();
    if (key === "RITHIKAN" || key === "LORD OF RED") {
      setConsoleStatus("ACCESS GRANTED. OVERRIDING SYSTEM...");
      setIsSecretRealmActive(true);
      playCosmicVoidAudio();
      setTimeout(() => setShowSecretConsole(false), 1500);
    } else {
      setConsoleStatus("INVALID CODE. ENTRY DENIED.");
      setSecretInput("");
    }
  };

  return (
    <div className={`relative w-full h-screen text-white overflow-x-hidden font-sans select-none custom-scrollbar transition-all duration-1000 ${
      isSecretRealmActive 
        ? 'bg-gradient-to-b from-[#0d0000] via-[#260000] to-[#050000] shadow-[inset_0_0_100px_rgba(255,0,0,0.3)]' 
        : 'bg-gradient-to-b from-[#020005] via-[#120024] to-[#020005]'
    }`}>
      
      {/* ----------------- STAGE 1: INTRO VOID & BLACK HOLE ----------------- */}
      {stage === 'intro' && (
        <div ref={introCanvasRef} className="absolute inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-b from-[#020005] via-[#0f0022] to-[#020005]">
          <div className="w-full h-[65vh]">
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
              <ambientLight intensity={0.2} />
              <pointLight position={[5, 5, 5]} intensity={1.5} color="#9d4edd" />
              <VoidBlackHole isSingularity={isSingularity} />
              <Stars radius={120} depth={60} count={3500} factor={5} saturation={0.8} fade speed={3} />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          
          <button 
            onClick={initiateRealmRebirth}
            className="mt-4 px-12 py-5 bg-[#030008] border-2 border-[#9d4edd] font-mono text-lg font-black tracking-[7px] text-white hover:text-[#030008] hover:bg-[#ffd700] hover:border-[#ffd700] transition-all duration-500 rounded-sm shadow-[0_0_40px_rgba(157,78,221,0.3)] hover:shadow-[0_0_60px_rgba(255,215,0,0.6)] cursor-pointer uppercase"
          >
            Realm Manifestation
          </button>
        </div>
      )}

      {/* ----------------- STAGE 2: MAIN PREMIUM WEB REALM ----------------- */}
      {stage === 'main' && (
        <div ref={mainRealmRef} className="w-full min-h-screen flex flex-col justify-between opacity-0 animate-fadeIn">
          
          {/* HEADER LAYER */}
          <header className="w-full px-12 py-6 flex justify-between items-center border-b border-[rgba(157,78,221,0.15)] bg-[rgba(2,0,5,0.6)] backdrop-blur-md sticky top-0 z-20">
            <div onClick={resetToNexus} className="flex items-center gap-4 cursor-pointer group">
              {/* 🛡️ RE-ENGINEERED 3D ETERNOX PROFILE LOGO SHIELD */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-[#3a0066] via-[#9d4edd] to-[#ffd700] p-[2px] shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all duration-500 group-hover:rotate-180">
                <div className="w-full h-full bg-[#020005] rounded-xl flex flex-col justify-center items-center overflow-hidden relative">
                  <span className="font-serif text-[10px] font-black text-[#ffd700] tracking-tighter leading-none">ETER</span>
                  <span className="font-serif text-[9px] font-black text-white tracking-widest leading-none mt-[2px]">NOX</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(157,78,221,0.2)] to-transparent animate-pulse"></div>
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-[#9d4edd]">
                  ETERNOX STUDIOS
                </h2>
                <p className="text-[9px] font-mono tracking-[4px] text-[#ffd700] uppercase opacity-80">Realm Rebirth</p>
              </div>
            </div>
            
            <nav className="flex gap-8 font-mono text-xs tracking-widest text-gray-400">
              <span onClick={resetToNexus} className="hover:text-white transition-colors duration-300 cursor-pointer hover:underline">NEXUS</span>
              <span onClick={() => setActiveLog(activeLog ? null : true)} className={`transition-colors duration-300 cursor-pointer hover:text-white ${activeLog ? 'text-[#ffd700] underline' : ''}`}>CHRONICLES</span>
              <span onClick={scrollToProjects} className="hover:text-white transition-colors duration-300 cursor-pointer hover:underline">ARCHIVES</span>
            </nav>
          </header>

          {/* INTERACTIVE CHRONICLES LOG LAYOUT */}
          {activeLog && (
            <div className="w-full max-w-4xl mx-auto mt-6 p-6 bg-[rgba(15,3,32,0.85)] border border-[#ffd700] rounded-xl animate-slideDown z-10">
              <h4 className="font-mono text-sm font-bold text-[#ffd700] tracking-wider mb-4">📜 DEVELOPER CHRONICLES // ACTIVE ACADEMIC LOGS</h4>
              <div className="space-y-3 font-mono text-xs text-gray-300">
                <div className="p-3 bg-[rgba(0,0,0,0.3)] border-l-2 border-[#9d4edd]">
                  <span className="text-[#9d4edd] font-bold">[MATRIX START]</span> Advanced Next.js 3D Engine configuration initialized via Moratuwa Core architectures.
                </div>
                <div className="p-3 bg-[rgba(0,0,0,0.3)] border-l-2 border-[#ffd700]">
                  <span className="text-[#ffd700] font-bold">[COSMIC EDUCATION]</span> Full-Stack AI Integration systems deploying Japanese listening matrices and multi-language sub-logics.
                </div>
              </div>
            </div>
          )}

          {/* BODY LAYER */}
          <main className="w-full max-w-6xl mx-auto px-6 py-8 flex flex-col justify-center items-center flex-1 z-10">
            
            <div className="w-full bg-[rgba(10,3,20,0.75)] border border-[rgba(157,78,221,0.2)] p-10 rounded-2xl backdrop-blur-lg text-center shadow-[0_0_60px_rgba(23,0,46,0.8)] relative">
              
              {/* VISION / MISSION GRID DEPLOYMENT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left border-b border-[rgba(157,78,221,0.1)] pb-8">
                <div className="border-l-2 border-[#9d4edd] pl-4">
                  <h4 className="font-mono text-xs font-bold text-[#ffd700] tracking-[3px] uppercase mb-2">Our Vision</h4>
                  <p className="text-gray-300 text-xs font-sans leading-relaxed">
                    To construct interactive celestial dimensions, transcending orthodox web boundaries by fusing cutting-edge 3D graphics with absolute cosmic aesthetics.
                  </p>
                </div>
                <div className="border-l-2 border-[#ffd700] pl-4">
                  <h4 className="font-mono text-xs font-bold text-[#9d4edd] tracking-[3px] uppercase mb-2">Our Mission</h4>
                  <p className="text-gray-300 text-xs font-sans leading-relaxed">
                    Continuously expanding the Eternox ecosystem daily, archiving supreme intellectual architectures, and engineering digital milestones for global deployment.
                  </p>
                </div>
              </div>

              <h3 id="archives-section" ref={projectsSectionRef} className="font-mono text-[10px] font-bold tracking-[10px] text-[#9d4edd] uppercase mb-2">Strategic Operations Panel</h3>
              
              {!showProjectsHub ? (
                <button
                  onClick={() => {
                    setShowProjectsHub(true);
                    setActiveTab('current');
                  }}
                  className="mt-4 px-10 py-5 bg-gradient-to-r from-[#1a0033] to-[#3a0066] border border-[#ffd700] font-serif font-black text-lg tracking-[5px] text-white rounded-md shadow-[0_0_30px_rgba(157,78,221,0.2)] hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] hover:bg-[#ffd700] hover:text-[#020005] transition-all duration-500 transform hover:scale-102"
                >
                  🔮 ENTER ETERNOX PROJECTS HUB 🔮
                </button>
              ) : (
                <div className="mt-4 w-full animate-fadeIn">
                  
                  {/* MASTER TAB NAVIGATION */}
                  <div className="flex justify-center gap-3 mb-8">
                    {['past', 'current', 'future'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 font-mono font-bold uppercase tracking-widest text-xs border rounded transition-all duration-300 ${
                          activeTab === tab 
                            ? 'bg-[#3a0066] border-[#ffd700] text-white shadow-[0_0_25px_rgba(157,78,221,0.5)]' 
                            : 'bg-transparent border-[rgba(157,78,221,0.2)] text-gray-400 hover:text-white hover:border-[#9d4edd]'
                        }`}
                      >
                        {tab === 'past' && '📜 Past Artifacts'}
                        {tab === 'current' && '⚡ Active Matrix'}
                        {tab === 'future' && '🔮 Future Visions'}
                      </button>
                    ))}
                  </div>

                  {/* HIGH-PREMIUM CONTENT DISPLAY */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                    {MASTER_PROJECTS_DATA[activeTab]?.map((proj, idx) => (
                      <div 
                        key={idx} 
                        className="bg-[rgba(15,3,32,0.6)] border border-[rgba(157,78,221,0.15)] hover:border-[#ffd700] p-5 rounded-lg text-left transition-all duration-300 hover:translate-y-[-2px] shadow-md flex flex-col justify-between"
                      >
                        <div>
                          <h4 className="font-serif text-base font-bold text-[#ffd700] tracking-wide">{proj.name}</h4>
                          <p className="text-gray-400 text-xs mt-2 font-sans leading-relaxed">{proj.details}</p>
                        </div>
                        
                        {activeTab === 'past' && proj.link && (
                          <a 
                            href={proj.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-[10px] font-mono font-bold text-[#9d4edd] hover:text-[#ffd700] hover:underline tracking-widest"
                          >
                            BRIDGE CONNECT →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </main>

          {/* SECRET OPERATIONAL CONSOLE OVERLAY */}
          {showSecretConsole && (
            <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4 backdrop-blur-md">
              <div className="bg-[#030008] border-2 border-[#9d4edd] p-8 rounded-xl max-w-md w-full font-mono text-xs shadow-[0_0_50px_rgba(157,78,221,0.4)]">
                <div className="flex justify-between items-center border-b border-[rgba(157,78,221,0.2)] pb-3 mb-4">
                  <span className="text-[#ffd700] font-bold">⚠️ OVERRIDE SECURITY TERMINAL</span>
                  <span onClick={() => setShowSecretConsole(false)} className="cursor-pointer text-gray-500 hover:text-white">✕</span>
                </div>
                <p className="text-gray-400 mb-4">{consoleStatus}</p>
                <form onSubmit={handleConsoleSubmit} className="flex gap-2">
                  <input 
                    type="text" 
                    value={secretInput}
                    onChange={(e) => setSecretInput(e.target.value)}
                    placeholder="ENTER CRITICAL ACCESS KEY..." 
                    className="flex-1 bg-[#0f0022] border border-[#9d4edd] p-3 text-white rounded focus:outline-none focus:border-[#ffd700]"
                    autoFocus
                  />
                  <button type="submit" className="bg-[#3a0066] border border-[#ffd700] px-4 text-white hover:bg-[#ffd700] hover:text-black font-bold transition-all">DECRYPT</button>
                </form>
              </div>
            </div>
          )}

          {/* FOOTER LAYER */}
          <footer className="w-full px-12 py-6 flex justify-between items-center border-t border-[rgba(157,78,221,0.15)] bg-[rgba(2,0,5,0.8)] text-xs font-mono tracking-widest text-gray-500 z-20">
            <div>
              <span>© {new Date().getFullYear()} ETERNOX STUDIOS. ALL RIGHTS RESERVED.</span>
            </div>
            <div 
              onClick={() => {
                setShowSecretConsole(true);
                setConsoleStatus("AWAITING OVERRIDE KEY...");
              }} 
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${isSecretRealmActive ? 'text-[#ff0000] drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]' : 'text-[#ffd700] animate-pulse'}`}
            >
              <span>{isSecretRealmActive ? "🔴 SECURE CONSOLE // REALM ALIVE [OVERRIDE ACTIVE]" : "⚡ SECURE CONSOLE // MASTER STATUS OVERRIDE"}</span>
            </div>
          </footer>

        </div>
      )}
    </div>
  );
}
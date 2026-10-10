import React, { useState } from "react";

export default function ComparisonSlider({ originalTitle = "Authentic Hardware Baseline", modifiedTitle = "Neural GAN Face-Swap Reconstruction" }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="glass-panel glass-panel-neon-hover p-5 rounded-2xl space-y-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold tracking-widest text-slate-700 dark:text-cyan-400 uppercase flex items-center gap-2 font-mono-code">
          <span>🔬</span> Side-by-Side Forensic Comparison View
        </h3>
        <span className="text-[10px] font-mono-code text-cyan-600 dark:text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
          Interactive Overlay
        </span>
      </div>

      {/* Comparison Viewport */}
      <div className="relative w-full h-60 sm:h-64 rounded-xl overflow-hidden bg-slate-950 border border-slate-300 dark:border-cyan-500/30 select-none shadow-xl">
        
        {/* Right Side: Modified / Anomaly View */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/90 via-slate-950 to-red-950/70 flex items-center justify-center p-6 text-center">
          <div className="space-y-2 max-w-xs">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 text-xl shadow-[0_0_15px_#ff0055] animate-pulse">
              🚨
            </div>
            <div className="text-xs font-bold text-red-300 uppercase font-mono-code tracking-wider text-neon-red-glow">{modifiedTitle}</div>
            <p className="text-[11px] text-red-200/90 font-mono-code leading-relaxed">
              High-frequency boundary discontinuity detected around jawline & ocular region.
            </p>
          </div>
        </div>

        {/* Left Side: Original View (Clipped by slider position) */}
        <div
          className="absolute top-0 bottom-0 left-0 bg-gradient-to-br from-emerald-950/90 via-slate-950 to-cyan-950/80 border-r-2 border-cyan-400 flex items-center justify-center p-6 text-center overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="space-y-2 max-w-xs shrink-0">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-xl shadow-[0_0_15px_#39ff14]">
              🛡️
            </div>
            <div className="text-xs font-bold text-emerald-300 uppercase font-mono-code tracking-wider text-neon-green-glow">{originalTitle}</div>
            <p className="text-[11px] text-emerald-200/90 font-mono-code leading-relaxed">
              Photometric lighting consistency & natural hardware camera sensor noise floor.
            </p>
          </div>
        </div>

        {/* Vertical Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 z-10 pointer-events-none shadow-[0_0_15px_#00f3ff]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-xs font-black shadow-[0_0_15px_#00f3ff]">
            ↔
          </div>
        </div>
      </div>

      {/* Range Input Control */}
      <div className="space-y-1.5">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="w-full accent-cyan-400 cursor-pointer bg-slate-200 dark:bg-slate-950 h-2.5 rounded-lg border border-slate-300 dark:border-slate-800"
        />
        <div className="flex justify-between text-[10px] font-mono-code text-slate-500 dark:text-slate-400 font-bold">
          <span className="text-emerald-600 dark:text-emerald-400">← Authentic Baseline ({sliderPosition}%)</span>
          <span className="text-red-600 dark:text-red-400">Synthetic Deepfake Overlay ({100 - sliderPosition}%) →</span>
        </div>
      </div>
    </div>
  );
}

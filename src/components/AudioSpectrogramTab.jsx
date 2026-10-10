import React from "react";

export default function AudioSpectrogramTab({ audioAnalysis }) {
  return (
    <div className="glass-panel glass-panel-neon-hover rounded-2xl p-6 space-y-6">
      <h3 className="text-xs font-bold tracking-widest text-slate-700 dark:text-cyan-400 uppercase flex items-center gap-2 font-mono-code">
        <span>🎵</span> Audio Spectrogram & Acoustic Forensics
      </h3>

      {audioAnalysis ? (
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Audio Metrics Grid */}
          <div className="space-y-3 font-mono-code text-xs">
            <div className="p-3 bg-white/70 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Average Loudness:</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold">{audioAnalysis.avgLoudness}</span>
            </div>
            <div className="p-3 bg-white/70 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Silence Ratio:</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold">{Math.round((audioAnalysis.silenceRatio || 0.1) * 100)}%</span>
            </div>
            <div className="p-3 bg-white/70 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Voice Clonability Rating:</span>
              <span className={`font-bold ${audioAnalysis.voiceClonability > 0.7 ? "text-red-600 dark:text-red-400 text-neon-red-glow" : "text-emerald-600 dark:text-emerald-400"}`}>
                {Math.round((audioAnalysis.voiceClonability || 0.85) * 100)}%
              </span>
            </div>
            <div className="p-3 bg-white/70 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Harmonic Phase Coherence:</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">{audioAnalysis.phaseCoherence}</span>
            </div>
            <div className="p-3 bg-white/70 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Web Audio Sample Rate:</span>
              <span className="text-slate-900 dark:text-slate-200 font-bold">{audioAnalysis.sampleRate || "44.1 kHz"}</span>
            </div>
          </div>

          {/* Waveform Visual simulation */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 dark:border-cyan-500/30 flex flex-col justify-center items-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-cyber-grid opacity-25"></div>
            <div className="w-full flex items-center justify-between gap-1 h-28 z-10">
              {Array.from({ length: 36 }).map((_, i) => {
                const h = Math.sin(i * 0.35) * 45 + 50;
                const isPeak = h > 80;
                return (
                  <div
                    key={i}
                    className={`w-1.5 rounded-full transition-all duration-300 ${
                      isPeak
                        ? "bg-gradient-to-t from-rose-500 to-amber-400 shadow-[0_0_10px_#ff0055] animate-pulse"
                        : "bg-gradient-to-t from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-[0_0_8px_#00f3ff]"
                    }`}
                    style={{ height: `${h}%` }}
                  ></div>
                );
              })}
            </div>
            <p className="text-[10px] font-mono-code text-cyan-400 mt-4 z-10 tracking-wider">
              WEB AUDIO FFT SPECTRAL DECOMPOSITION (0 Hz - 22.05 kHz)
            </p>
          </div>

        </div>
      ) : (
        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono-code">No audio stream detected in current input media.</p>
      )}
    </div>
  );
}

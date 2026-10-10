import React from "react";

export default function PresetSamples({ presetSamples, currentFile, onLoadPreset, systemMeta }) {
  return (
    <div className="glass-panel glass-panel-neon-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300">
      <div>
        <h3 className="text-xs font-bold tracking-widest text-slate-700 dark:text-cyan-400 uppercase mb-3 flex items-center justify-between font-mono-code">
          <span>August 2026 Benchmarks</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30">PRESETS</span>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
          Select a forensic sample from the August 2026 deepfake detection dataset:
        </p>

        <div className="space-y-3">
          {presetSamples.map((sample) => {
            const isSelected = currentFile && currentFile.name === sample.name;
            const isHighRisk = sample.risk > 0.5;

            return (
              <div
                key={sample.id}
                onClick={() => onLoadPreset(sample)}
                className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-cyan-500/15 dark:bg-cyan-500/20 border-cyan-500 dark:border-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.25)]"
                    : "bg-white/60 dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-cyan-400/50"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                    {sample.type === "video" ? "📹" : "🎙️"} {sample.name}
                  </span>
                  <span
                    className={`text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full border ${
                      isHighRisk
                        ? "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/40 shadow-[0_0_8px_rgba(255,0,85,0.3)]"
                        : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/40 shadow-[0_0_8px_rgba(57,255,20,0.3)]"
                    }`}
                  >
                    {Math.round(sample.risk * 100)}% RISK
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{sample.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Engine Specs */}
      <div className="mt-5 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-200 dark:border-cyan-500/20 text-[11px] text-slate-600 dark:text-slate-400 font-mono-code space-y-1">
        <div className="flex justify-between">
          <span>CLASSIFIER:</span>
          <span className="text-slate-900 dark:text-cyan-300 font-bold">{systemMeta.modelName}</span>
        </div>
        <div className="flex justify-between">
          <span>RELEASE:</span>
          <span className="text-slate-900 dark:text-slate-200">{systemMeta.releaseDate}</span>
        </div>
      </div>
    </div>
  );
}

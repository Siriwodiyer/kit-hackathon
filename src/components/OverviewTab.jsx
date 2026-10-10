import React from "react";
import ComparisonSlider from "./ComparisonSlider";

export default function OverviewTab({ xaiFindings, metadata, formatBytes }) {
  return (
    <div className="space-y-6">
      
      {/* Side-by-Side Media Comparison Viewport */}
      <ComparisonSlider />

      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Left: Key XAI Findings (2 cols) */}
        <div className="lg:col-span-2 glass-panel glass-panel-neon-hover rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold tracking-widest text-slate-700 dark:text-cyan-400 uppercase flex items-center justify-between font-mono-code">
            <span>Explainable AI (XAI) Feature Weights</span>
            <span className="text-[10px] text-slate-400 font-normal">ResNet-v4.2 Analysis</span>
          </h3>

          <div className="space-y-3">
            {xaiFindings.length === 0 ? (
              <p className="text-xs text-slate-500 dark:text-slate-400">No anomaly findings recorded.</p>
            ) : (
              xaiFindings.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    item.severity === "high"
                      ? "bg-red-500/5 dark:bg-red-500/10 border-red-500/40 text-slate-900 dark:text-red-200 shadow-[0_0_12px_rgba(255,0,85,0.15)]"
                      : item.severity === "medium"
                      ? "bg-amber-500/5 dark:bg-amber-500/10 border-amber-500/40 text-slate-900 dark:text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.15)]"
                      : "bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/40 text-slate-900 dark:text-emerald-200 shadow-[0_0_12px_rgba(57,255,20,0.15)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-bold flex items-center gap-2">
                      <span>{item.severity === "high" ? "🚨" : item.severity === "medium" ? "⚠️" : "🛡️"}</span>
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-500/30">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">{item.desc}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Technical Metadata (1 col) */}
        <div className="glass-panel glass-panel-neon-hover rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold tracking-widest text-slate-700 dark:text-cyan-400 uppercase font-mono-code">
            Media Integrity Specs
          </h3>

          <div className="space-y-2 text-xs font-mono-code">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">FILE NAME:</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold truncate max-w-[140px]">{metadata.name || "N/A"}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">FILE SIZE:</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold">{formatBytes(metadata.size)}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">CONTAINER:</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold">{metadata.container || "N/A"}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">TIMESTAMP:</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold">{metadata.lastModified || "N/A"}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex justify-between overflow-hidden">
              <span className="text-slate-500 dark:text-slate-400">SHA-256:</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold truncate max-w-[120px]">{metadata.sha256 || "N/A"}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">SAMPLE RATE:</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold">{metadata.sampleRate || "48.0 kHz"}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

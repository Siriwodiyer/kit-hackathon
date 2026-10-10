import React, { useState } from "react";
import InteractiveTimeline from "./InteractiveTimeline";

export default function FrameMatrixTab({ framesAnalysis }) {
  const [selectedFrame, setSelectedFrame] = useState(null);

  const activeFrame = selectedFrame || (framesAnalysis.length > 0 ? framesAnalysis[0] : null);

  return (
    <div className="glass-panel glass-panel-neon-hover rounded-2xl p-6 space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h3 className="text-xs font-bold tracking-widest text-slate-700 dark:text-cyan-400 uppercase flex items-center gap-2 font-mono-code">
          <span>🖼️</span> Sampled Frame Anomaly Heatmap
        </h3>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-code">Temporal Sample Rate: 2.5s</span>
      </div>

      {/* Interactive Anomaly Timeline Scrubber */}
      <InteractiveTimeline
        frames={framesAnalysis}
        onSelectFrame={(f) => setSelectedFrame(f)}
        selectedFrameTime={activeFrame?.time}
        mediaDuration={framesAnalysis.length * 2.5}
      />

      {framesAnalysis.length === 0 ? (
        <p className="text-xs text-slate-500 dark:text-slate-400 py-4 font-mono-code">No frame samples available for this media type.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {framesAnalysis.map((frame, idx) => {
            const isSelected = activeFrame?.time === frame.time;
            const isHighRisk = frame.anomalyScore > 0.7;

            return (
              <div
                key={idx}
                onClick={() => setSelectedFrame(frame)}
                className={`bg-white/70 dark:bg-slate-900/80 rounded-xl p-4 border transition-all duration-200 cursor-pointer space-y-3 ${
                  isSelected
                    ? "border-cyan-500 dark:border-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.3)] bg-slate-50 dark:bg-slate-900"
                    : "border-slate-200 dark:border-slate-800 hover:border-cyan-400/50"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono-code font-bold">
                  <span className="text-slate-600 dark:text-slate-400">T + {frame.time}s</span>
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      isHighRisk
                        ? "bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/40 shadow-[0_0_8px_rgba(255,0,85,0.3)]"
                        : "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 shadow-[0_0_8px_rgba(57,255,20,0.3)]"
                    }`}
                  >
                    {Math.round(frame.anomalyScore * 100)}%
                  </span>
                </div>

                {/* Synthetic Frame Box */}
                <div className="w-full h-24 bg-slate-950 rounded-lg border border-slate-800 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
                  {isHighRisk && (
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ff0055] animate-ping"></div>
                  )}
                  <div className="text-center font-mono-code text-[10px] text-slate-400 z-10">
                    <div>FRAME #{idx + 1}</div>
                    <div className="text-cyan-400 font-bold mt-1">{frame.edgeArtifacts}</div>
                  </div>
                </div>

                {/* Anomaly Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono-code">
                    <span>Anomaly Metric:</span>
                    <span className="font-bold text-slate-900 dark:text-cyan-300">{frame.anomalyScore}</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isHighRisk ? "bg-red-500 shadow-[0_0_8px_#ff0055]" : "bg-emerald-400 shadow-[0_0_8px_#39ff14]"
                      }`}
                      style={{ width: `${frame.anomalyScore * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 dark:text-slate-400 space-y-0.5 font-mono-code">
                  <div>Blur Metric: {frame.blurScore}</div>
                  <div>Blink Status: {frame.eyeBlinkRate}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

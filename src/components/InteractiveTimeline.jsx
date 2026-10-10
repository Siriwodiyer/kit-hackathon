import React from "react";

export default function InteractiveTimeline({ frames, onSelectFrame, selectedFrameTime, mediaDuration }) {
  if (!frames || frames.length === 0) return null;

  const totalTime = mediaDuration || (frames[frames.length - 1]?.time || 20);

  return (
    <div className="bg-slate-100/80 dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
      <div className="flex items-center justify-between text-xs font-mono-code font-bold">
        <span className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <span>⏱️</span> Interactive Anomaly Timeline Scrubber
        </span>
        <span className="text-cyan-600 dark:text-cyan-300 font-normal">Click marker to inspect timestamp</span>
      </div>

      {/* Timeline Scrubber Track */}
      <div className="relative w-full h-9 bg-slate-200 dark:bg-slate-950 rounded-lg border border-slate-300 dark:border-slate-800 flex items-center px-4 overflow-hidden shadow-inner">
        {/* Track Line */}
        <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-800 rounded-full relative">
          
          {/* Frame Markers */}
          {frames.map((frame, idx) => {
            const leftPercent = Math.min(95, Math.max(5, (frame.time / totalTime) * 100));
            const isHighRisk = frame.anomalyScore > 0.65;
            const isSelected = selectedFrameTime === frame.time;

            return (
              <button
                key={idx}
                onClick={() => onSelectFrame && onSelectFrame(frame)}
                title={`Timestamp: ${frame.time}s | Anomaly: ${Math.round(frame.anomalyScore * 100)}%`}
                style={{ left: `${leftPercent}%` }}
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full border-2 transition-all duration-200 transform hover:scale-130 flex items-center justify-center ${
                  isSelected
                    ? "ring-4 ring-cyan-400/50 border-cyan-300 bg-cyan-400 shadow-[0_0_15px_#00f3ff] z-20 scale-125"
                    : isHighRisk
                    ? "bg-red-500 border-red-300 shadow-[0_0_10px_#ff0055] z-10"
                    : "bg-emerald-500 border-emerald-300 shadow-[0_0_8px_#39ff14]"
                }`}
              >
                <span className="w-1 h-1 rounded-full bg-white"></span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timestamp Legend */}
      <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-500 dark:text-slate-400 font-bold px-1">
        <span>0.0s</span>
        <span>MID: {(totalTime / 2).toFixed(1)}s</span>
        <span>END: {totalTime.toFixed(1)}s</span>
      </div>
    </div>
  );
}

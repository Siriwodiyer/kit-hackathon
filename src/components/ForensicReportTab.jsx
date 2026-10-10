import React from "react";

export default function ForensicReportTab({ metadata, confidence, riskLevel, xaiFindings, systemMeta }) {
  const downloadJsonCertificate = () => {
    const jsonStr = JSON.stringify({ metadata, confidence, riskLevel, xaiFindings, systemMeta }, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Deepfake_Forensic_Report_Aug2026_${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="glass-panel glass-panel-neon-hover rounded-2xl p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-orbitron flex items-center gap-2">
            <span>📄</span> Official Media Forensic Report
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono-code mt-0.5">Generated for Legal & Compliance Audit Verification</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-slate-700 transition-colors"
          >
            🖨️ Print PDF Report
          </button>
          <button
            onClick={downloadJsonCertificate}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
          >
            📥 Download JSON Certificate
          </button>
        </div>
      </div>

      {/* Forensic Certificate Printable Box */}
      <div className="bg-slate-900/90 dark:bg-slate-950 p-6 rounded-xl border border-slate-300 dark:border-cyan-500/30 space-y-4 font-mono-code text-xs shadow-lg">
        <div className="flex justify-between border-b border-slate-800 pb-3">
          <div>
            <p className="font-bold text-slate-100 font-orbitron text-sm text-cyan-400">DEEPFAKE DEFENDER FORENSIC AUDIT CERTIFICATE</p>
            <p className="text-slate-400 text-[10px] mt-0.5">ENGINE RELEASE: {systemMeta.releaseDate}</p>
          </div>
          <div className="text-right">
            <p className="text-cyan-300 font-bold text-sm">{riskLevel.status}</p>
            <p className="text-slate-400 text-[10px] mt-0.5">CONFIDENCE: {Math.round(confidence * 100)}%</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-slate-400 text-[10px]">TARGET FILE:</p>
            <p className="text-slate-200 font-bold">{metadata.name || "N/A"}</p>
          </div>
          <div>
            <p className="text-slate-400 text-[10px]">DIGITAL SIGNATURE:</p>
            <p className="text-cyan-400 text-[10px] truncate">{metadata.sha256 || "N/A"}</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-3">
          <p className="text-slate-400 text-[10px] mb-2 font-bold">EXPLAINABLE AI FINDINGS:</p>
          <div className="space-y-1.5">
            {xaiFindings.map((f, i) => (
              <div key={i} className="text-slate-300 text-[11px] leading-relaxed">
                • <span className="font-bold text-cyan-300">{f.title}:</span> {f.desc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

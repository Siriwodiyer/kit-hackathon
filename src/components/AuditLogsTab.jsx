import React from "react";

export default function AuditLogsTab({ auditLogs }) {
  return (
    <div className="glass-panel glass-panel-neon-hover rounded-2xl p-6 space-y-4 font-mono-code">
      <h3 className="text-xs font-bold tracking-widest text-slate-700 dark:text-cyan-400 uppercase flex items-center justify-between">
        <span className="flex items-center gap-2">📜 Forensic Audit Trail Log Stream</span>
        <span className="text-[10px] text-cyan-600 dark:text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">August 2026 Security Ledger</span>
      </h3>

      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 dark:border-cyan-500/30 max-h-96 overflow-y-auto space-y-2.5 text-xs shadow-inner">
        {auditLogs.map((log, idx) => (
          <div key={idx} className="flex items-start gap-3 border-b border-slate-900/80 pb-2">
            <span className="text-slate-500 shrink-0 font-bold">{log.timestamp}</span>
            <span className="text-slate-300">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

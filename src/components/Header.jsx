import React from "react";

export default function Header({ systemMeta, theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/85 dark:bg-slate-950/90 border-b border-slate-200 dark:border-cyan-500/30 px-6 py-4 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Title & Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-600 p-0.5 shadow-md">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl font-black font-orbitron tracking-wider bg-gradient-to-r from-cyan-600 via-indigo-600 to-fuchsia-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
                DEEPFAKE DEFENDER
              </h1>
              <span className="text-[10px] font-mono-code font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                {systemMeta.version}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2 mt-0.5 font-medium">
              <span>Cybersecurity Media Forensics Workbench</span>
              <span className="text-cyan-500">•</span>
              <span className="text-cyan-700 dark:text-cyan-300 font-mono-code">August 2026 Engine</span>
            </p>
          </div>
        </div>

        {/* Engine Status & Light/Dark Theme Switcher */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 text-xs shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-cyan-400 animate-pulse"></span>
            <span className="text-slate-700 dark:text-cyan-200 font-mono-code text-[11px] font-bold">
              ENGINE READY: <span className="text-cyan-700 dark:text-cyan-400">{systemMeta.modelName}</span>
            </span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            title={theme === "dark" ? "Switch to Modern Light Mode" : "Switch to Neon Dark Mode"}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-cyan-500/50 text-slate-800 dark:text-cyan-300 text-xs font-mono-code font-bold transition-all shadow-sm flex items-center gap-2"
          >
            {theme === "dark" ? (
              <>
                <span>☀️</span>
                <span>LIGHT MODE</span>
              </>
            ) : (
              <>
                <span>🌙</span>
                <span>NEON DARK MODE</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}

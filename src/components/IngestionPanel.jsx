import React from "react";

export default function IngestionPanel({
  file,
  fileType,
  metadata,
  running,
  onFileChange,
  onClearFile,
  onAnalyze,
  onSimulateBenchmark,
  confidence,
  onResetResults,
  videoRef,
  audioRef,
  formatBytes
}) {
  return (
    <div className="lg:col-span-2 glass-panel glass-panel-neon-hover rounded-2xl p-6 relative overflow-hidden transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold tracking-widest text-slate-700 dark:text-cyan-400 uppercase flex items-center gap-2 font-mono-code">
          <svg className="w-4 h-4 text-cyan-500 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Input Media Ingestion
        </h2>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-code">Formats: MP4, WEBM, WAV, MP3</span>
      </div>

      {/* Dropzone Area */}
      <div className="relative border-2 border-dashed border-slate-300 dark:border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-xl p-6 transition-all duration-200 text-center bg-slate-50/50 dark:bg-slate-950/60 group shadow-inner">
        <input
          type="file"
          accept="video/*,audio/*"
          onChange={onFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />

        {!file ? (
          <div className="py-6 space-y-3">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-300 group-hover:scale-110 shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-transform duration-200">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Drag and drop video/audio file or <span className="text-cyan-600 dark:text-cyan-400 underline decoration-cyan-400/50">browse local file</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono-code">Local Web Audio FFT & Canvas processing • Zero cloud upload</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/80 dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-cyan-500/30 text-left shadow-sm">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-600 dark:text-cyan-300 shrink-0 text-xl shadow-[0_0_12px_rgba(0,243,255,0.2)]">
                  {fileType === "video" ? "🎥" : "🎙️"}
                </div>
                <div className="truncate">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">{metadata.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono-code">{formatBytes(metadata.size)} • {metadata.container} • {metadata.lastModified}</p>
                </div>
              </div>

              <button
                onClick={onClearFile}
                className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 z-20 border border-slate-300 dark:border-slate-700 transition-colors"
              >
                Change File
              </button>
            </div>

            {/* Media Preview Player */}
            {file.preview && (
              <div className="max-h-64 rounded-xl overflow-hidden bg-black border border-slate-300 dark:border-cyan-500/30 flex items-center justify-center shadow-lg">
                {fileType === "video" && (
                  <video ref={videoRef} src={file.preview} controls className="max-h-64 w-full object-contain" />
                )}
                {fileType === "audio" && (
                  <audio ref={audioRef} src={file.preview} controls className="w-full p-4" />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action Toolbar */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onAnalyze}
            disabled={!file || running}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 disabled:opacity-40 text-white text-sm font-bold shadow-[0_0_20px_rgba(0,243,255,0.35)] transition-all duration-200 flex items-center gap-2"
          >
            {running ? (
              <>
                <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Analyzing Media...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Run Neural Scan</span>
              </>
            )}
          </button>

          <button
            onClick={onSimulateBenchmark}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-cyan-500/30 text-xs font-bold transition-all shadow-sm hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]"
          >
            ⚡ Test Deepfake Benchmark
          </button>
        </div>

        {confidence !== null && (
          <button
            onClick={onResetResults}
            className="px-3 py-2 text-xs font-mono-code text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors"
          >
            Clear Results
          </button>
        )}
      </div>
    </div>
  );
}

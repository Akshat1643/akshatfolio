type ThemeToggleProps = {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold transition ${
        isDark
          ? 'border-white/10 bg-white/5 text-slate-100 hover:bg-white/10'
          : 'border-slate-200 bg-slate-900 text-white hover:bg-slate-800'
      }`}
    >
      <span className={`grid h-8 w-8 place-items-center rounded-full text-base ${isDark ? 'bg-slate-950/80 text-slate-100' : 'bg-white/10 text-white'}`}>
        {isDark ? '☾' : '☀'}
      </span>
      <span className="hidden sm:inline">{isDark ? 'Dark' : 'Light'} mode</span>
    </button>
  )
}

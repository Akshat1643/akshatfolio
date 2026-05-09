type ThemeToggleProps = {
  isDark: boolean
  onToggle: () => void
  className?: string
}

export function ThemeToggle({ isDark, onToggle, className = '' }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <span className={`grid h-6 w-6 place-items-center rounded-full text-sm ${isDark ? 'bg-slate-950/80 text-slate-100' : 'bg-white/15 text-white'}`}>
        {isDark ? '☾' : '☀'}
      </span>
      <span>{isDark ? 'Dark' : 'Light'} mode</span>
    </button>
  )
}

import { Component, useEffect, useState } from 'react'

function formatError(err) {
  if (!err) return { name: 'UnknownError', message: 'Unknown error', stack: '' }
  if (err instanceof Error) return { name: err.name, message: err.message, stack: err.stack || '' }
  if (typeof err === 'string') return { name: 'Error', message: err, stack: '' }
  try {
    return { name: 'Error', message: JSON.stringify(err), stack: '' }
  } catch {
    return { name: 'Error', message: String(err), stack: '' }
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { err: null }
  }

  static getDerivedStateFromError(error) {
    return { err: formatError(error) }
  }

  componentDidCatch(error, info) {
    const formatted = formatError(error)
    const stack = formatted.stack || ''
    const componentStack = info?.componentStack || ''
    // Keep a copy for easy retrieval even if UI is white.
    try {
      window.localStorage.setItem(
        '__portfolio_last_error__',
        JSON.stringify({ ...formatted, componentStack }),
      )
    } catch {
      // ignore
    }
    console.error('ErrorBoundary caught:', { ...formatted, stack, componentStack })
  }

  render() {
    if (this.state.err) return this.props.fallback(this.state.err)
    return this.props.children
  }
}

export function ErrorOverlay({ children }) {
  const [err, setErr] = useState(null)

  useEffect(() => {
    const onError = (event) => {
      const error = event?.error || event?.reason || event
      const formatted = formatError(error)
      setErr(formatted)
      try {
        window.localStorage.setItem('__portfolio_last_error__', JSON.stringify(formatted))
      } catch {
        // ignore
      }
    }
    window.addEventListener('error', onError)
    window.addEventListener('unhandledrejection', onError)
    return () => {
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onError)
    }
  }, [])

  const renderFallback = (fallbackErr) => {
    const textFallback = `${fallbackErr.name}: ${fallbackErr.message}\n\n${fallbackErr.stack || ''}`.trim()
    return (
      <div className="min-h-screen bg-slate-950 p-4 text-slate-100">
        <div className="mx-auto max-w-4xl rounded-2xl border border-red-500/30 bg-red-950/20 p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-red-200">Runtime error detected</p>
              <p className="mt-1 text-xs text-slate-300">
                Copy this message and send it here so I can fix the exact cause.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                try {
                  window.localStorage.removeItem('__portfolio_last_error__')
                } catch {
                  // ignore
                }
                setErr(null)
              }}
              className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-100 hover:bg-slate-800"
            >
              Dismiss
            </button>
          </div>

          <pre className="mt-4 overflow-auto rounded-xl bg-slate-950/60 p-4 text-xs leading-relaxed text-slate-100">
            {textFallback}
          </pre>
        </div>
      </div>
    )
  }

  if (!err) {
    return <ErrorBoundary fallback={renderFallback}>{children}</ErrorBoundary>
  }

  return renderFallback(err)
}


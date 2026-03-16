import { useEffect, useState } from 'react'

const ROLES = ['Full Stack Developer', 'C++ Programmer', 'Problem Solver']
const TYPE_DELAY = 80
const PAUSE_AT_END = 1800
const DELETE_DELAY = 40
const PAUSE_AT_START = 600

export function TypingEffect({ className = '' }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentRole = ROLES[roleIndex]

  useEffect(() => {
    if (!isDeleting) {
      if (text.length < currentRole.length) {
        const t = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), TYPE_DELAY)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AT_END)
      return () => clearTimeout(t)
    }

    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), DELETE_DELAY)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, PAUSE_AT_START)
    return () => clearTimeout(t)
  }, [text, isDeleting, currentRole, roleIndex])

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      {text}
      <span
        className="ml-0.5 inline-block h-4 w-0.5 shrink-0 bg-current opacity-90"
        style={{
          animation: 'typing-blink 1s step-end infinite',
        }}
        aria-hidden
      />
    </span>
  )
}

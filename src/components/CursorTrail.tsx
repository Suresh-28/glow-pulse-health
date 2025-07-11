import { useEffect, useRef } from "react"

export function CursorTrail() {
  const trailRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    let animationId: number
    const trails: HTMLDivElement[] = []
    let mouseX = 0
    let mouseY = 0

    const createTrail = (x: number, y: number) => {
      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      trail.style.left = `${x}px`
      trail.style.top = `${y}px`
      document.body.appendChild(trail)
      
      trails.push(trail)
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail)
        }
        const index = trails.indexOf(trail)
        if (index > -1) {
          trails.splice(index, 1)
        }
      }, 500)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Only create trail if not on mobile
      if (!('ontouchstart' in window)) {
        createTrail(mouseX, mouseY)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      trails.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail)
        }
      })
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return null
}
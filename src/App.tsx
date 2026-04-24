import { useEffect, useRef } from 'react'
import './App.css'
import PeriodicTable from './components/PeriodicTable'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)
    
    const dots = Array.from({length: 70}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '0,200,255' : '0,255,170',
    }))

    let rafId: number
  
    const draw = () => {
      ctx.clearRect(0,0, canvas.width, canvas.height)
      for (const d of dots) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${d.color},${d.alpha})`
        ctx.fill()
        d.x = (d.x + d.vx + canvas.width) % canvas.width
        d.y = (d.y + d.vy + canvas.height) % canvas.height
      }
      rafId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return  <canvas ref={canvasRef} className='bg-particles'></canvas>
}

const App = () => {
  return (
    <main className="app">
      <AnimatedBackground />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="content">
        <h1 className="title">tabla periodica</h1>
        <PeriodicTable />
      </div>
    </main>
  )
}

export default App

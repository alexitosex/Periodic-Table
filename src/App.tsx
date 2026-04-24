import './App.css'
import PeriodicTable from './components/PeriodicTable'
import AnimatedBackground from './components/AnimatedBackground'

const App = () => {
  const orbs = Array.from({length: 4}, (_, k) => ({ key: k }))
  return (
    <main className="app">
      <AnimatedBackground />
      {orbs.map((el)=>(<div className={`orb orb-${el.key}`} />))}
      
      <div className="content">
        <h1 className="title">tabla periodica</h1>
        <PeriodicTable />
      </div>
    </main>
  )
}

export default App

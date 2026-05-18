import './styles/App.css'
// import PeriodicTable from './components/periodic-table/PeriodicTable'
import AnimatedBackground from './components/backgrounds/AnimatedBackground'

const App = () => {
  const orbs = Array.from({length: 4}, (_, k) => ({ key: k }))
  return (
    <main className="app">
      <AnimatedBackground /> 
      {orbs.map((el)=>(<div className={`orb orb-${el.key}`} />))}
        
      <div className="content">
        <h1 className="title">tabla periódica</h1>
         {/* <PeriodicTable/> */}
      </div>
    </main>
  )
} 

export default App

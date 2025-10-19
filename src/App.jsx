import { useState } from 'react'
import { Header, Footer,Hero,About } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <About />  
      <Footer />
    </div>
  )
}

export default App
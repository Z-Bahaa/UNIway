import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Description from './components/Description/Description'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Description />
    </div>
  )
}

export default App

import { useState } from 'react'
import Header from './Komponenter/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header/>
  )
}

export default App

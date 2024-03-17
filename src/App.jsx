import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalculateGrades from './Components/CalculateGrades'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalculateGrades/>
    </>
  )
}

export default App

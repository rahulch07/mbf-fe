import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayTickets from './components/DisplayTickets/DisplayTickets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayTickets/>
    </>
  )
}

export default App

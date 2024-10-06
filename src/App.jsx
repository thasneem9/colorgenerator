import { useState } from 'react'
import ColorGenerator from './components/ColorGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ColorGenerator></ColorGenerator>
    </>
  )
}

export default App

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Nav from '../src/Partials/Nav'
import Home from '../src/Components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
    </>
  )
}

export default App

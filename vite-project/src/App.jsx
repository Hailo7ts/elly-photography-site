import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Nav from '../src/Partials/Nav'
import Photography from '../src/Components/Photography'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Photography />
    </>
  )
}

export default App

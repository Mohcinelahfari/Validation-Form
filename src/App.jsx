import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Mastring/Form'
import Validation from './FormValidation/Validation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Validation />
    </>
  )
}

export default App

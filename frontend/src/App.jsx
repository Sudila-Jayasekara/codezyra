import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex w-full h-screen items-center justify-center bg-gray-500'>
      <h1 className='text-3xl font-bold text-white'>Welcome to CodeZyra</h1>
    </div>
    </>
  )
}

export default App

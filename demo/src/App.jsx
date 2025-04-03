import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Meals from './components/Meals'

function App() {

  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      <Meals />
    </div>
  )
}

export default App

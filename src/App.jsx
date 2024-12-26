import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Header'
import { ToNotes } from './notes/ToNotes'
import { ToTasks } from './tasks/ToTasks'
import { HomePage } from './HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tasks" element={<ToTasks />} />
          <Route path="/notes" element={<ToNotes />} />
        </Routes>
      </Router>
      

    </>
  )
}

export default App

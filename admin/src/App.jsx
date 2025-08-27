import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
function App() {

  return (
    <>
      <div>
        <Navbar/>
        <hr />
        <div className="app-content flex">
          <Sidebar/>
        </div>
      </div>
    </>
  )
}

export default App

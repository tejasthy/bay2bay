import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/home.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1> Bay2Bay Foundation </h1>
      <p> Bay2Bay Education is a 501(c)(3) nonprofit organization that provides free personalized tutoring services for K-12 students in underserved communities initially targeting schools in the Bay Area. It offers highly interactive instructional modules that center on real-world application. We will first conduct a pilot program during summer 2024 and officially launch for the 2024-2025 academic year in the Bay Area. Being a nonprofit organization, Bay2Bay Education is made possible by volunteers who assist in administrative work, the interpretation of California State Education Standards, the creation of curriculum, and other aspects of the nonprofit.</p>
      <p className='disclaimer'> We're currently in the process of building our website. </p>
      <a href='mailto:tejas.thiyagarajan@gmail.com'> Email Us </a>
      <p> (650) 924-5583 </p>
    </>
  )
}

export default App

{/* <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
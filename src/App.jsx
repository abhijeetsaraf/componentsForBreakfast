import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* Demo Headings for GitHub Pages */}
      <div style={{ margin: '2rem 0' }}>
        <h1>Heading 1: Welcome to ComponentsForBreakfast</h1>
        <h2>Heading 2: Explore React & Vite</h2>
        <h3>Heading 3: This is a demo for GitHub Pages</h3>
        <h4>Heading 4: Easily deploy your site</h4>
        <h5>Heading 5: Enjoy building UI components!</h5>
        <p>This page is deployed using GitHub Pages. You should now see these headings live!</p>
      </div>
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
      </p>
    </>
  )
}

export default App

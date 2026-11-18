
import { Suspense, lazy } from 'react'
import './App.css'

// Lazy load the About component
const About = lazy(() => import('./components/About'))

function App() {

  return (
    <>
      <h1>Home Page</h1>

      {/* Show loading message while About loads */}
      <Suspense fallback={<h1>Loading About Page...</h1>}>
        <About />
      </Suspense>
    </>
  )
}

export default App

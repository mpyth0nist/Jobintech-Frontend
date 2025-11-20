import './App.css'
import { useEffect, useState } from 'react'
import Counter from './Counter'
import ClickCounter from './components/ClickCounter'



function App() {

  let [clicks, setClicks] = useState(0)

  const increment = () => {
    setClicks(c => c + 1)
  }

  useEffect(() => {
    document.title = clicks
  }, [clicks])
  
  return (
    <>
      <ClickCounter clicks={clicks} handleClick={increment} />
      
    </>
  )
}

export default App

import './App.css'
import { useEffect, useState } from 'react'
import Counter from './Counter'
import ClickCounter from './components/ClickCounter'
import Timer from './components/Timer/Timer'



function App() {

  // Exercise 2
  // let [clicks, setClicks] = useState(0)

  // const increment = () => {
  //   setClicks(c => c + 1)
  // }

  // useEffect(() => {
  //   document.title = clicks
  // }, [clicks])
  
  // Exercise 3

  // let [value, setValue] = useState(0)


  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setValue(v => v + 1)
    
  //   }, 1000)

  //   return () => clearInterval(timer);

  // }, [])


  // Exercise 4

  


  
  return (
    <>
      <Timer value={value} />
      
    </>
  )
}

export default App

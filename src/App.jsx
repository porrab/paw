import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/navbar'
import body from './components/Body/body'
import Body from './components/Body/body'
import Footer from './components/Footer'

const App = () =>  {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
    
  )
}

export default App

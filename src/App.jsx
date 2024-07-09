
import './App.css'
import Navbar from './Components/Nabvar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
function App() {


  return (
    <>
      <h1 className='bg-slate-400 text-3xl py-4 text-center text-yellow-50'>React Routing</h1>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App

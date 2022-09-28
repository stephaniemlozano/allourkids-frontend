import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Mission from './pages/Mission'
import Events from './pages/Events'
import Donations from './pages/Donations'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/events' element={<Events />} />
        <Route path='/donations' element={<Donations />} />
        {/* <Route path='/mobile' element={<Mobile />} /> */}
      </Routes>
      <br />
      <Footer />
    </BrowserRouter>
  )
}

export default App

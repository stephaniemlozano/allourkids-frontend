import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Mission from './pages/Mission'
import Events from './pages/Events'
import Donations from './pages/Donations'
import Admin from './components/Admin'
import Login from './components/Login'
import SingleEvent from './components/SingleEvent'
import ProtectedRoutes from './components/ProtectedRoutes'
import SignUp from './components/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/events' element={<Events />} />
        <Route path='/donations' element={<Donations />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/admin' element={<Admin />} />
          <Route path='/single-event' element={<SingleEvent />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>
        <Route path='*' element={<h1>Oops! Invalid page.</h1>} />
      </Routes>
      <br />
      <Footer />
    </BrowserRouter>
  )
}

export default App

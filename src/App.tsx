import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'



function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Footer/>
    </>
  )
}

export default App
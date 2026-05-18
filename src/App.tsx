import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Funcionarios from './pages/funcionarios/Funcionarios'
import Cadastro from './pages/cadastro/Cadastro'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/> 
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/funcionarios" element={<Funcionarios />}/>
        <Route path="/cadastro-funcionario" element={<Cadastro />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
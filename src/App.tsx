import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Funcionarios from './pages/funcionarios/Funcionarios'
import FormFuncionario from './pages/formfuncionario/FormFuncionario'
import { ToastProvider } from './components/toast/ToastProvider'

function App() {

  return (
    <>
      <BrowserRouter>
      <ToastProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/> 
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/funcionarios" element={<Funcionarios />}/>
          <Route path="/cadastro-funcionario" element={<FormFuncionario />}/>
          <Route path="/editar-funcionario/:id" element={<FormFuncionario />} />
        </Routes>
        <Footer/>
      </ToastProvider>
      </BrowserRouter>
    </>
  )
}

export default App

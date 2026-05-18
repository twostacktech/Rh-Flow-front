import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'



function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Home />
      <Sobre />
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<h1>ROTA FUNCIONANDO</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Register from "./components/Register"
import AddSales from "./components/AddSales"
import Top5Sales from "./components/Top5Sales"
import TotleRevenue from "./components/TotleRevenue"
import Home from "./components/Home"
import { Container } from "react-bootstrap"

import './App.css'


function App() {
  return (
    <BrowserRouter>
    <div className="main-layout">
      <Header/>
      
    
    <Container className="content my-4">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Addsales" element={<AddSales/>}/>
      <Route path="/Top5sales" element={<Top5Sales/>}/>
      <Route path="/totlerevenue" element={<TotleRevenue/>}/>
    </Routes>
    </Container>
    <Footer/>
  </div>
    </BrowserRouter>
    
  )
}

export default App

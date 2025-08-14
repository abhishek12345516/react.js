import {  BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Products from "./components/Products"
import Header from "./components/Header"
import Details from "./components/Details"
import Footer from "./components/Footer"
import Dashborad from "./components/Dashboard"
import Profiles from "./components/Profiles"
import Settings from "./components/Settings"
import Login from "./components/Login"


  
function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/Products" element={<Products/>} />
        <Route path="/Details/:id" element={<Details/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Dashboard" element={<Dashborad/>} >
        <Route path="Profiles" element={<Profiles/>}/>
        <Route path="Settings" element={<Settings/>}/>
        </Route>
     
      </Routes>
    
       <Footer/>
    </Router>
  )
}

export default App

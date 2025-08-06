// import App from './App';
import Login from "./ContextDemo/login";
import LoginContextProvider from "./ContextDemo/LoginContext";
// import MyGrandGParent from "./ContextDemo1/MyGrandGParent";
import Header from "./ThemeContext/Header";
// import ThemeProvider from "./ThemeContext/ThemeContext";

function App() {
  return (
 <div className="App">
  <LoginContextProvider>
    <Header/>
    <Login/>
  </LoginContextProvider>
 </div>


  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/Header'
import NavbarComponent from './components/Navbar'
import FooterComponent from './components/Footer'
import LoginScreen from './pages/Login'
import RegisterScreen from './pages/Register'
import HomeScreen from './pages/Home'

function App() {
  return (
    <>

    <HeaderComponent/>
      <BrowserRouter>
      <NavbarComponent/>
        <Routes>
          <Route path="/" element={<LoginScreen/>}></Route>
          <Route path="/register" element={<RegisterScreen/>}></Route>
          <Route path="/home" element={<HomeScreen/>}></Route>
        </Routes>
      </BrowserRouter>
  <FooterComponent/>
  </>
  )
}

export default App;

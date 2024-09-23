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
          <NavbarComponent/>
                <LoginScreen/>
          <FooterComponent/>
    </>

  )
}

export default App;

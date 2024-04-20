
import './App.css'
import Blog from './Blog'
import Products from './Products'
import About from './components/About'
import Footer from './components/MyFooter'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Services from './components/Services'
import MyFooter from './components/MyFooter'

function App() {

  return (
    
    <>
   <Navbar></Navbar>
   <Home></Home>
   <Services></Services>
   <About></About>
   <Products></Products>
   <Blog></Blog>
   <Newsletter></Newsletter>
   <MyFooter></MyFooter>
    </>
  )
}

export default App

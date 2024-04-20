
import './App.css'
import Blog from './Blog'
import Products from './Products'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Services from './components/Services'

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
    </>
  )
}

export default App

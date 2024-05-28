
import Navbar from './Navbar.tsx'
import Hero from './Hero.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Footer from './Footer.tsx'

function App() {
  //const { data } = useFruits()

  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  )
}
export default App

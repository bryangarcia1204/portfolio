import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CursorSpark from './components/CursorSpark'
import NoiseOverlay from './components/NoiseOverlay'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <NoiseOverlay />
      <CursorSpark />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Services />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
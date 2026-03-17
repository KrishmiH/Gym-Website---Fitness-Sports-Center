import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MembershipPlans from './components/MembershipPlans'
import Trainers from './components/Trainers'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((previous) => {
      const next = !previous
      localStorage.setItem('darkMode', String(next))
      return next
    })
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-slate-950'
      }`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <MembershipPlans darkMode={darkMode} />
        <Trainers darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App

import './App.css'
import AboutMe from './components/AboutMe'
import ChatBot from './components/Chatbot'
import Footer from './components/Footer'
import HardSkill from './components/HardSkill'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import SoftSkill from './components/SoftSkill'

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <SocialLinks/>
      <ChatBot/>
      <AboutMe/>
      <HardSkill/>
      <SoftSkill/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
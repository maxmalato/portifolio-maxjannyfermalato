import './App.css'
import AboutMe from './components/AboutMe'
import FeedbackList from './components/FeedbackList'
import Footer from './components/Footer'
import HardSkill from './components/HardSkill'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import SoftSkill from './components/SoftSkill'

function App() {
  return (
    <div id="home">
      <Navbar/>
      <Header/>
      <SocialLinks/>
      <AboutMe/>
      <HardSkill/>
      <SoftSkill/>
      <Projects/>
      <FeedbackList/>
      <Footer/>
    </div>
  )
}

export default App
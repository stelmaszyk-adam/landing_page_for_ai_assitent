import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import IndustryUseCases from './components/IndustryUseCases'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <IndustryUseCases />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  )
}

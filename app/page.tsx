import About from '@/components/home/about'
import AppSkills from '@/components/home/app-skills'
import Hero from '@/components/home/hero'
import Journey from '@/components/home/journey'
import Projects from '../components/home/projects'
import ContactCTA from '@/components/home/contact-cta'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Journey/>
      <AppSkills/>
      <Projects/>
      <ContactCTA/>
    </div>
  )
}

export default page

import Benefits from "./career-components/Benefits"
import HeroSection from "./career-components/HeroSection"
import JobOpenings from "./career-components/JobOpenings"
import Values from "./career-components/Values"
import Faq from "./Home-components/Faq"
import Start from "./Home-components/Start"

const Career = () => {
  return (
    <>
      <HeroSection />
      <Values />
      <Benefits />
      <JobOpenings />
      <Faq />
      <Start />
    </>
  )
}

export default Career
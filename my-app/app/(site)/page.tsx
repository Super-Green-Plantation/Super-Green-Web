import Estates from "./components/Estates"
import HeroSection from "./components/HeroSection"
import Investment from "./components/Investment"
import Loan from "./components/Loan"


const page = () => {
  return (
    <div>
        <HeroSection />
      <Estates />
      <Investment />
      <Loan />
    </div>
  )
}

export default page
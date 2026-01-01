import Estates from "./components/Estates";
import HeroSection from "./components/HeroSection";
import Investment from "./components/Investment";
import Loan from "./components/Loan";
import HomePlanCards from "./plan/HomePlan";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Estates />
      <Investment />
      <HomePlanCards/>
      <Loan />
    </div>
  );
};

export default page;

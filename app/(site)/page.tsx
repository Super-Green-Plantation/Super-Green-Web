import Estates from "./components/Estates";
import HeroSection from "./components/HeroSection";
import Investment from "./components/Investment";
import Loan from "./components/Loan";
import InvestmentPlans from "./products/page";

export const metadata = {
  title: "SuperGreen | Sustainable Agriculture & Estates in Sri Lanka",
  description:
    "SuperGreen is a leader in sustainable agriculture, organic estates, and green investments across Sri Lanka.",
};


const page = () => {
  return (
    <div>
      <HeroSection />
      <Estates />
      <Investment />
      <InvestmentPlans />
      <Loan />
      
    </div>
  );
};

export default page;

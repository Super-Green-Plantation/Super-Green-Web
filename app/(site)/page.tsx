"use client"

import Estates from "./components/Estates";
import HeroSection from "./components/HeroSection";
import Investment from "./components/Investment";
import Loan from "./components/Loan";
import InvestmentPlans from "./products/page";

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

import Estates from "./(site)/components/Estates";
import HeroSection from "./(site)/components/HeroSection";
import Investment from "./(site)/components/Investment";
import Loan from "./(site)/components/Loan";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Estates />
      <Investment />
      <Loan />
    </>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;

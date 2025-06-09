import "./globals.css";
import Banner from "@/components/Banner";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="bg-black">
      <Banner/>
     <HowItWorks/>
     <Pricing/>
    </div>
  );
}

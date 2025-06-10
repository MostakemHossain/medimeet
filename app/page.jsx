import "./globals.css";
import Banner from "@/components/Banner";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div className="bg-black">
      <Banner/>
     <HowItWorks/>
     <Pricing/>
     <Testimonial/>
    </div>
  );
}

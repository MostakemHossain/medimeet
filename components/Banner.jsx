import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="bg-black">
    <section className="py-32 relative overflow-hidden">
     <div className="container mx-auto px-4">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div className="space-y-8">
           <Badge className={"bg-emerald-900/50 border-emerald-700/30 px-4 py-2 text-sm font-medium"} variant={"outline"}>HealthCare made simple</Badge>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Connect with doctors <br /> <span
           className="gradient-title"
           >
             anytime,anywhere</span></h1>
           <p className="text-muted-foreground text-lg md:text-xl max-w-md">
           Book Appointments, consult via video, and manage your healthcare journey all in all secure platform.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <Button 
             asChild
             size={"lg"}
             className={"bg-emerald-600 text-white hover:bg-emerald-700"}
             >
               <Link href={"/onboarding"}>
               Get Started <ArrowRight className="ml-2 size-4"/>
               </Link>
             </Button>
             <Button 
             asChild
             variant={"outline"}
             size={"lg"}
             className={"bg-emerald-700/30 hover:bg-muted/80"}
             >
               <Link href={"/doctors"}>
              Find Doctors
               </Link>
             </Button>
           </div>
         </div>
         <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-[500px]"> 
           <Image
           src={"/banner2.png"}
           alt="Healthcare Banner"
           fill
           priority
           className="object-cover md:pt-14 rounded-xl"
           />
         </div>
       </div>
     </div>
    </section>
   </div>
  )
}

export default Banner
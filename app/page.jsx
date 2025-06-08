import { Badge } from "@/components/ui/badge";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="bg-black">
      <Banner/>
    </div>
  );
}

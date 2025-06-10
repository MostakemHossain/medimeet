import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="px-4 container mx-auto">
        <Card className={"bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20"}>
          <CardContent className={"p-8 md:p-12 lg:p-16 relative overflow-hidden"}>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Healthcare Experience?

                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Join MediMeet today and take the first step towards accessible, affordable, and quality healthcare for you and your family.

                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                    size={"lg"}
                    asChild
                    className={"bg-emerald-600 hover:bg-emerald-700 text-white "} 
                    >
                        <Link href={"/sign-up"}>
                        Sign up
                        </Link>
                    </Button>
                    <Button
                    variant={"outline"}
                    size={"lg"}
                    className={"border-emerald-700/30 hover:bg-muted/80"} 
                    >
                        <Link href={"/pricing"}>
                        Pricing
                        </Link>
                    </Button>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;

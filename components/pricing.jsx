import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, Stethoscope } from "lucide-react";
import { creditBenefits } from "@/lib/data";

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="px-4 container mx-auto">
        <div className="text-center mb-16">
          <Badge
            className={
              "bg-emerald-900/50 border-emerald-700/30 px-4 py-2 text-sm font-medium"
            }
            variant={"outline"}
          >
            Affordable HealthCare
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Affordable Pricing for Everyone
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose a plan that fits your needs. We offer flexible pricing
            options to ensure everyone has access to quality healthcare.
          </p>
        </div>
        <div>
          <Card className={"mt-12 bg-muted/20 border-emerald-900/30"}>
            <CardHeader>
              <CardTitle
                className={
                  "text-xl font-semibold text-white flex items-center "
                }
              >
                <Stethoscope className="size-5 mr-2 text-emerald-400" />
                How Our Credit System Works.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {creditBenefits.map((benefit, index) => {
                  return (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                        <Check className="size-4 text-emerald-400" />
                        
                      </div>
                      <p
                          className="text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: benefit }}
                        ></p>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

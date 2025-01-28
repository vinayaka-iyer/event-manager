import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const PriceCard = ({ title, price, features }) => {
  return (
    <Card className="max-w-sm border rounded-lg shadow-md text-center">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-3xl font-bold">
          ${price} <span className="text-lg font-normal">/month</span>
        </p>
        <hr className="my-4" />
        <ul className="text-gray-600 space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 justify-center">
              <Check className="w-5 h-5 text-blue-500" /> {feature}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full text-lg font-semibold">
          Get started
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriceCard;

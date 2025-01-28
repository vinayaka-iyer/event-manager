import PriceCard from "@/components/PriceCard";
import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: 19,
    features: [
      "Consequat ex proident",
      "Deserunt sit cupidatat",
      "Amet id ea et nisi cillum",
    ],
  },
  {
    title: "Standard",
    price: 39,
    features: [
      "All Basic features",
      "Additional customization",
      "Priority support",
    ],
  },
  {
    title: "Premium",
    price: 59,
    features: [
      "All Standard features",
      "Advanced analytics",
      "24/7 dedicated support",
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-7xl font-bold text-center my-5">
        Choose a plan that fits your needs
      </h1>
      <div className="xl:grid xl:grid-cols-3 flex flex-col gap-6 max-w-3/5 mx-auto mt-24">
        {pricingPlans.map((plan, index) => (
          <PriceCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;

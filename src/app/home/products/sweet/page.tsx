import React from "react";
import CardComponent from "@/components/products/CardComponent";

const SweetPage = () => {
  return (
    <div className="grid m-10 lg:grid-cols-3 items-center justify-evenly  gap-10  sm:grid-cols-1 md:grid-cols-2  opacity-95 bg-gradient-to-b">
      <CardComponent
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/caramel_cake-d5fda4c.jpg?quality=90&resize=960,872"
        label="Torta"
        price={31}
      ></CardComponent>
      <CardComponent
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/caramel_cake-d5fda4c.jpg?quality=90&resize=960,872"
        label="Torta"
        price={31}
      ></CardComponent>
      <CardComponent
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/caramel_cake-d5fda4c.jpg?quality=90&resize=960,872"
        label="Torta"
        price={31}
      ></CardComponent>
    </div>
  );
};

export default SweetPage;

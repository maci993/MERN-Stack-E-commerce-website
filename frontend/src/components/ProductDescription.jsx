import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20 ml-5">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nihil
          ipsa sit quam facilis corrupti, <br /> velit debitis laboriosam rem,
          praesentium cumque dicta hic accusamus earum blanditiis aliquam animi.
          Expedita, assumenda.
        </p>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nihil
          ipsa sit quam facilis corrupti, velit debitis laboriosam rem,
          praesentium </p>
      </div>
    </div>
  );
};

export default ProductDescription;

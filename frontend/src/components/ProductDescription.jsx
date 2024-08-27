import React from "react";

const ProductDescription = () => {
  return (
    <div className="max-padd-container mt-20 ">
      <div className="flex gap-3 mb-4 ">
        <button className="btn-dark rounded-sm !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn-dark-outline rounded-sm !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn-dark-outline rounded-sm !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16 ">
        <p className="text-sm">
          Elevate your lifestyle with our selection of premium products.
          Discover elegant dresses made from high-quality materials that offer
          both style and comfort for any occasion. Explore our cutting-edge
          electronics, designed to enhance your daily life with top performance,
          reliability, and the latest technology. </p>
          <p className="text-sm">Additionally, our premium
          cosmetics are crafted with high-quality ingredients to ensure a
          flawless look and healthy skin. Whether you're dressing up for a
          special event, upgrading your tech, or enhancing your natural beauty,
          our products are designed to meet your needs and exceed your
          expectations.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;

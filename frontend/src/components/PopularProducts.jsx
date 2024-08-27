import React, { useState } from "react";
import Item from './Item'
import { useEffect } from "react";

const PopularProducts = () => {

  const[popular_products,setPopular_products] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularproducts")
      .then((response) => response.json())
      .then((data) => setPopular_products(data));
  },[]);

  return (

       <section className="max-padd-container bg-primary  p-12 xl:py-28">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto">
        <h3 className="h3">Popular Products</h3>
        <p className="medium-16">
        Check out our Popular Products section for the best-selling and highly-rated items that customers love.
        </p>
      </div>
      {/* Container */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32">
        {popular_products.map((item)=>(
           <Item key={item.id} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;

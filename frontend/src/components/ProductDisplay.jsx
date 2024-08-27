import React, { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
      {/* left side */}
      <div className="flex gap-x-2 xl:flex-1 py-5">
        <div className="flex flex-col gap-2 flex-wrap ">
          <img
            src={product.image}
            alt="Product Image"
            className="max-h-[84px] rounded-lg bg-gray-10"
          />
          <img
            src={product.image}
            alt="Product Image"
            className="max-h-[84px] rounded-lg bg-gray-10"
          />
          <img
            src={product.image}
            alt="Product Image"
            className="max-h-[84px] rounded-lg bg-gray-10"
          />
          <img
            src={product.image}
            alt="Product Image"
            className="max-h-[84px] rounded-lg bg-gray-10"
          />
        </div>
        <div className="max-h-[355px] w-auto flex">
          <img
            src={product.image}
            alt="Main Image"
            className="roundede-xl bg-gray-10 "
          ></img>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col gap-5 xl:flex-[1.5] bg-white py-2 rounded-xl px-6">
        <h3 className="sm:line-clamp-1 text-2xl font-bold">{product.name}</h3>
        <div className="flex items-start gap-x-2 medium-16 ">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p>(224)</p>
        </div>
        <div className="flex items-baseline gap-x-6 bold-28  sm:bold-32 mt-4">
          <div>$.{product.new_price}.00</div>
          <div className="bold-20 sm:bold-28 line-through text-secondary">
            $.{product.old_price}.00
          </div>
        </div>
        <div>
          {/* Products Colors,Icons and Buttons */}
          <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3m my-6">
            <div>
              <h4 className="bold-16">Select Color:</h4>
              <div className="flex gap-3 my-3">
                <div className="ring-2 ring-slae-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed"></div>
                <div className="ring-2 ring-slae-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryYellow"></div>
                <div className="ring-2 ring-slae-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryBlue"></div>
                <div className="ring-2 ring-slae-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
              </div>
            </div>
            <div>
              <h4 className="bold-16">Select Size:</h4>
              <div className="flex gap-3 my-3">
                <div className="ring-2 ring-slae-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                  S
                </div>
                <div className="ring-2 ring-slae-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                  M
                </div>
                <div className="ring-2 ring-slae-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                  L
                </div>
                <div className="ring-2 ring-slae-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                  XL
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mb-8 max-w-[555px]">
            <button onClick={()=>{addToCart(product.id)}} className="btn-dark rounded-md">Add To Cart</button>
            <button className="btn-secondary rounded-md !px-4">
              <FaHeart />
            </button>
          </div>
          <p>
            <span className="medium-16 text-tertiary">Category:</span>Women |
            Jacket | Winter
          </p>
          <p>
            <span className="medium-16 text-tertiary">Tags:</span> Modern | New
            Arrivals
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;

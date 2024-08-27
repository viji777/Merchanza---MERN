import React, { useEffect, useState } from "react";
import { TbTrash } from 'react-icons/tb'
const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("https://merchanza-bend.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async(id) =>{
     
    await fetch('https://merchanza-bend.onrender.com/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})

    })
    await fetchInfo();

  }

  return (
    <div className="p-2 border bg-white mb-0 rounded-sm w-full mt-5 lg:ml-5">
      <h4 className="bold-22 p-5 uppercase">Product List</h4>
      <div className="max-h-[77vh] overflow-auto PX-4 text-center">
        <table className="w-full mx-auto">
          <thead>
            <tr className="bg-primary bold-14 sm:regular-22 text-start py-12">
              <th className="p-2">Products</th>
              <th className="p-2">Title</th>
              <th className="p-2">Old Price</th>
              <th className="p-2">New Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, i) => (
              <tr key={i} className="border-b border-slate-900/20 text-gray-20 p-6 medium-14">
                <td className="flexCenter my-2 ">
                  <img src={product.image} alt=""></img>
                </td>
                <td><div className="line-clamp-3">{product.name}</div></td>
                <td>${product.old_price}.00</td>
                <td>${product.new_price}.00</td>
                <td>{product.category}</td>
                <td><div className="bold-22 pl-6 sm:pl-14" onClick={()=> remove_product(product.id)}><TbTrash></TbTrash></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;

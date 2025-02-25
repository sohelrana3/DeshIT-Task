import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  let [data, setdata] = useState([]);
  // useEffect create
  useEffect(() => {
    async function allData() {
      const data = await axios.get("http://localhost:8000/api/allProduct");
      setdata(data.data);
    }
    allData();
  });
  return (
    <div className="contianer max-w-6xl mx-auto my-3 ">
      <div className=" mx-auto text-center">
        <h3 className="text-2xl mb-4 font-normal">CRIBS & BASKETS</h3>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> elit, sed do eiusmod temp.
        </p>
      </div>

      {/* Products section */}
      <div className="grid grid-cols-4 gap-x-3 pb-4 ">
        {/* map */}

        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-x-3 border border-gray-200 rounded-xl hover:outline-dashed hover:border-none outline-gray-200 pb-4">
            <img
              src={item.image}
              alt=""
            />

            <a href="" className="text-gray-600">
            {item.name}
            </a>

            <h5 className="text-2xl">
              <a href="">{item.title}</a>
            </h5>
            <div>
              <span className="text-gray-600 ">${item.price}.00</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

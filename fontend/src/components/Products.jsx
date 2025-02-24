import React from "react";

const Products = () => {
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
      <div className="grid grid-cols-4 pb-4 ">
        {/* map */}
        <div className="flex flex-col items-center gap-x-3 border border-gray-200 rounded-xl hover:outline-dashed hover:border-none outline-gray-200 pb-4">
          <img
            src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/Shop-Single-gallery-img-05.jpg"
            alt=""
          />

          <a href="" className="text-gray-600">BEDS</a>

          <h5 className="text-2xl">
            <a href="">Premium Bed Wooden</a>
          </h5>
          <div>
            <span className="text-gray-600 ">$300.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

import React from "react";

const CategoryCard = ({ category }) => {

  if (!category) return null;

  return (
    <div
      className={`border overflow-hidden relative cursor-pointer w-full ${
        category.type=='product' ? "h-72" : "h-96 rounded-xl"
      }`}
    >
      <img
        src={category.type=='product' ? category.img : category.img}
        alt={category.type=='product' ? category.name : category.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full text-center py-3">
        <h6 className="text-white text-xl font-bold">
          {category.type=='product' ? category.name : category.name}
        </h6>
      </div>
    </div>
  );
};

export default CategoryCard;

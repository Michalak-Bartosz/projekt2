import React from "react";

function Category(props) {
  return (
    <div>
      <img
        src={props.category.imagePath}
        alt=""
        className="avatar aspect-square rounded-full shadow-xl m-auto p-2"
        style={{ backgroundColor: props.category.color }}
      />
    </div>
  );
}
export default Category;

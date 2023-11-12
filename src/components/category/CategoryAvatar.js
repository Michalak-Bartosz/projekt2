import React from "react";

function CategoryAvatar(props) {
  return props.category ? (
    <img
      src={props.category.image}
      alt=""
      className={
        "avatar aspect-square rounded-full shadow-xl m-auto p-2 " +
        props.className
      }
      style={{ backgroundColor: props.category.color }}
    />
  ) : (
    <img
      src=""
      alt=""
      className="avatar aspect-square rounded-full m-auto p-2 bg-white min-w-full"
    />
  );
}
export default CategoryAvatar;

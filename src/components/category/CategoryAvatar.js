import React from "react";

function CategoryAvatar(props) {
  return (
    <img
      src={props.category.imagePath}
      alt=""
      className={
        "avatar aspect-square rounded-full shadow-xl m-auto p-2 " +
        props.className
      }
      style={{ backgroundColor: props.category.color }}
    />
  );
}
export default CategoryAvatar;

import React from "react";
import CategoryAvatar from "./CategoryAvatar";
import { Link } from "react-router-dom/dist";
import { FaEdit } from "react-icons/fa";
import DeleteConfirmation from "../event/DeleteConfirmation";
import Airplane2Background from "../../images/background/airplane_dotted_b_2.png";

function ManageCategoryPage(props) {
  const deleteCategory = (id) => {
    props.setCategories((categories) =>
      categories.filter((category) => category.id !== id)
    );
  };

  return (
    <>
      <img
        className="z-0 fixed flex w-1/2 bottom-0 right-0 scroll-auto opacity-30"
        src={Airplane2Background}
        alt="Airplane2Background"
      />
      <div className="z-10 relative">
        <h1 className="text-6xl font-lobster font-bold m-auto w-max px-10 py-5 mb-10 text-center border-8 border-black border-dotted rounded-lg">
          Manage Categories
        </h1>
        <Link
          className="flex m-auto w-max p-4 border rounded-lg bg-green-900 hover:bg-green-700 font-bold text-white text-4xl"
          to={"/create/category"}
        >
          Create New Category
        </Link>
        <div className="grid grid-flow-row grid-cols-4 gap-10">
          {props.categories.map((category) => {
            return (
              <div
                key={category.id}
                className="bg-slate-300 bg-opacity-90 rounded-md p-10 px-15 shadow-md w-max text-center m-auto my-12"
              >
                <h1 className="text-4xl mb-5">{category.name}</h1>
                <CategoryAvatar category={category} className="w-56" />
                <div className="flex m-auto mt-6 text-4xl text-center">
                  <Link
                    className="flex text-cyan-700 border-4 border-cyan-700 rounded-md hover:text-cyan-500 hover:border-cyan-500 hover:shadow-md hover:bg-slate-250 m-auto mr-5 h-16 py-2 px-4"
                    to={"/category/edit?id=" + category.id}
                  >
                    <FaEdit className="m-auto" />
                    <h1 className="font-bold m-auto">Edit</h1>
                  </Link>
                  <DeleteConfirmation
                    className="flex w-min ml-3 text-amber-950 border-4 border-amber-950 rounded-md hover:text-amber-700 hover:border-amber-700 hover:shadow-md hover:bg-slate-250 m-auto ml-0 h-16 py-2 px-4 cursor-pointer"
                    deleteEvent={deleteCategory}
                    id={category.id}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ManageCategoryPage;

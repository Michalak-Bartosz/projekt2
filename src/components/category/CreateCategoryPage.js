import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Car1Background from "../../images/background/car_dotted_b_1.png";

function CreateCategoryPage(props) {
  const navigate = useNavigate();

  const [newCategory, setNewCategory] = useState({
    id: null,
    name: "",
    color: "",
    image: "",
  });
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [image, setImage] = useState();

  const createCategory = () => {
    let id = Math.max(...props.categories.map((e) => e.id)) + 1;
    setNewCategory({
      id: parseInt(id),
      name: name,
      color: color,
      image: image,
    });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    if (newCategory.id !== null) {
      props.setCategories((prevCategories) => [...prevCategories, newCategory]);
      navigate("/category");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCategory]);

  return (
    <>
      <img
        className="z-0 fixed flex w-1/2 top-30 right-0 scroll-auto opacity-30"
        src={Car1Background}
        alt="Car1Background"
      />
      <div className="z-10 relative block px-10">
        <h1 className="text-6xl font-lobster font-bold m-auto w-max px-10 py-5 mb-10 text-center border-8 border-black border-dotted rounded-lg">
          Add Category
        </h1>
        <div className="text-left text-4xl my-auto">
          <div className="my-8">
            <div className="flex mb-8">
              <h1 className="font-bold underline decoration-dotted mr-4">
                Name
              </h1>
            </div>
            <input
              id="name-input"
              className="rounded-md text-3xl border-0 shadow-md w-1/3"
              type="text"
              placeholder="New name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-8">
            <h1 className="font-bold underline decoration-dotted mb-8 mr-4">
              Color:
            </h1>
            <div className="flex">
              <input
                className="rounded-md text-3xl bg-transparent w-24 h-24"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <h1 className="my-auto ml-4">{color}</h1>
            </div>
          </div>
          <div className="flex m-auto mt-4">
            <div className="mr-6">
              <h1 className="font-bold underline m-0 decoration-dotted">
                Add New Images
              </h1>
              <input
                id="image-input"
                className="rounded-md text-2xl w-80 mt-4 border-4 border-slate-800"
                type="file"
                accept="image/*"
                onChange={onImageChange}
              />
            </div>
          </div>
          <div className="m-auto rounded-lg border-2 border-black my-6" />
          <button
            type="submit"
            className="border-2 border-black px-6 py-2 rounded-md bg-cyan-600 font-bold shadow-md hover:bg-cyan-500 hover:shadow-lg"
            onClick={createCategory}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateCategoryPage;

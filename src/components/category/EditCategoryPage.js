import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Car1Background from "../../images/background/car_dotted_b_1.png";

function EditCategoryPage(props) {
  const queryParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const getCategory = (id) => {
    return props.categories.find((category) => category.id === parseInt(id));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const category = useMemo(() => getCategory(queryParams.get("id")), []);

  const [updated, setUpdated] = useState(false);
  const [name, setName] = useState(category.name);
  const [color, setColor] = useState(category.color);
  const [image, setImage] = useState(category.image);

  const updateCategory = () => {
    category.name = returnIfChanged(category.name, name);
    category.color = returnIfChanged(category.color, color);
    category.image = returnIfChanged(category.image, image);
    setUpdated(true);
  };

  const returnIfChanged = (currentValue, newValue) => {
    if (currentValue !== newValue) {
      return newValue;
    }
    return currentValue;
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    if (updated === true) {
      props.setCategories((prevCategories) => [
        ...prevCategories.filter((e) => e.id !== category.id),
        category,
      ]);
      navigate(-1);
      setUpdated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updated]);

  return (
    <>
      <img
        className="z-0 fixed flex w-1/2 top-30 right-0 scroll-auto opacity-30"
        src={Car1Background}
        alt="Car1Background"
      />
      <div className="z-10 relative block px-10">
        <h1 className="text-6xl font-lobster font-bold m-auto w-max px-10 py-5 mb-10 text-center border-8 border-black border-dotted rounded-lg">
          Edit Category
        </h1>
        <div className="text-left text-4xl my-auto">
          <div className="my-8">
            <div className="flex mb-8">
              <h1 className="font-bold underline decoration-dotted mr-4">
                Name:
              </h1>
              <h1 className="text-slate-500">{category.name}</h1>
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
            <div className="flex mb-8">
              <h1 className="font-bold underline decoration-dotted mr-4">
                Color:
              </h1>
              <div
                className="w-12 h-12 ml-4"
                style={{ backgroundColor: category.color }}
              />
              <h1 className="text-slate-500 my-auto ml-4">{category.color}</h1>
            </div>
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
            onClick={updateCategory}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default EditCategoryPage;

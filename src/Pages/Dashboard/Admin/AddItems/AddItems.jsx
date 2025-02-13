import { useForm } from "react-hook-form";
import CommonTitle from "../../../../Components/Ui/CommonTitle";
import axios from "axios";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
  const axiosSecure = UseAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data?.photo[0] };
    const photoUrl = await axios.post(
      "https://api.imgbb.com/1/upload?key=597d78aa1ab369b0aa1583848b74f0f9",
      imageFile,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    const menuItems = {
      name: data?.name,
      recipe: data?.recipe,
      image: photoUrl?.data?.data?.display_url,
      category: data?.category,
      price: parseFloat(data?.price),
    };

    // added menu item to the database
    const res = await axiosSecure.post("/all-menu", menuItems);
    if (res?.data?.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data?.name} added successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <CommonTitle subTitle="---What's new?---" title="ADD AN ITEM" />
      <div className="bg-[#F3F3F3] p-10 max-w-4xl mx-auto">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe name */}
          <label className="form-control w-full">
            <div className="label">
              <span className="text-[#444] font-semibold text-xl">
                Recipe name*
              </span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input w-full placeholder:text-[#A1A1A1] placeholder:text-lg"
            />
            {errors.name && (
              <p role="alert" className="text-red-500">
                Recipe name is required
              </p>
            )}
          </label>

          {/* Category && Price */}
          <div className="flex items-center gap-5">
            {/* category */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="text-[#444] font-semibold text-xl">
                  Category*
                </span>
              </div>
              <select
                {...register("category", { required: true })}
                defaultValue=""
                className="select select-bordered"
              >
                <option value="" disabled>
                  Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soups">Soups</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category && (
                <p role="alert" className="text-red-500">
                  Category is required
                </p>
              )}
            </label>

            {/* price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="text-[#444] font-semibold text-xl">
                  Price*
                </span>
              </div>
              <input
                {...register("price", { required: true, min: 0 })}
                type="number"
                placeholder="Price"
                className="input w-full placeholder:text-[#A1A1A1] placeholder:text-lg"
              />
              {errors.price && errors.price.type === "required" && (
                <p role="alert" className="text-red-500">
                  Price is required
                </p>
              )}
              {errors.price && errors.price.type === "min" && (
                <p role="alert" className="text-red-500">
                  Price must be at least 0
                </p>
              )}
            </label>
          </div>

          {/* Recipe details */}
          <label className="form-control w-full">
            <div className="label">
              <span className="text-[#444] font-semibold text-xl">
                Recipe details*
              </span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
              className="textarea textarea-bordered w-full placeholder:text-[#A1A1A1] placeholder:text-lg"
              rows={5} // Adjust as needed
            />
            {errors.recipe && (
              <p role="alert" className="text-red-500">
                Recipe details is required
              </p>
            )}
          </label>

          {/* Image field */}
          <input
            {...register("photo", { required: true })}
            type="file"
            className="file-input w-full max-w-xs block"
          />

          {/* submit button */}
          <input
            className="bg-gradient-to-r from-[#835D23] to-[#B58130] py-3 px-6 text-white text-xl font-bold cursor-pointer"
            type="submit"
            value="Add item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;

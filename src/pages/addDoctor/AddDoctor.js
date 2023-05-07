import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { data = [] } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/specialty");
      const data = await res.json();
      if (data.success) {
        return data;
      }
    },
  });
  const specialtys = data.specialty;
  const handleAddDoctor = (data) => {
    console.log(data);
  };
  return (
    <div className=" w-80 mx-auto lg:w-96 lg:mx-0 ">
      <h1 className=" uppercase text-xl font-bold">Add A Doctor</h1>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "Please Enter Doctor's name" })}
            type="text"
            placeholder="Enter Doctor's name"
            className="input input-bordered w-full "
          />
          {errors.email && (
            <p className=" text-error">{errors?.name?.message}</p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Please enter Doctor's email" })}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full "
          />
          {errors.email && (
            <p className=" text-error">{errors?.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty", { required: true })}
            className="select select-primary w-full "
          >
            {specialtys?.map((specialty) => (
              <option
                selected
                defaultValue={specialty.name}
                key={specialty._id}
              >
                {specialty.name}
              </option>
            ))}
          </select>
        </div>

        <label className="label">
          <span className="label-text">Upload a image</span>
        </label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              {...register("image", {
                required: "Please upload a image",
              })}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        </div>
        {errors.image && (
          <p className=" text-error">{errors?.image?.message}</p>
        )}
        <input
          className="w-full btn btn-accent text-white mt-5"
          type="submit"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;

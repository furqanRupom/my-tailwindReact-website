import React from "react";

const Form = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-3xl font-bold text-center my-10 text-sky-500">
        Give your feedback
      </h1>
      <div className="grid justify-items-end space-y-5 bg-sky-500/25 p-20 w-fit mx-auto">
        <label className="text-xl font-medium" htmlFor="name">
          name : <input  className="focus:outline-sky-500 outline:none py-2 px-1 rounded" type="text" />
        </label>
        <label className="text-xl font-medium" htmlFor="email">
          {" "}
          email : <input className="focus:outline-sky-500 outline:none py-2 px-1 rounded" type="email" name="" id="" />
        </label>
        <label className="text-xl font-medium" htmlFor="password">
          password : <input className="focus:outline-sky-500 outline:none py-2 px-1 rounded" type="password" name="" id="" />
        </label>
      </div>
    </div>
  );
};

export default Form;

import React from 'react'
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
const Login = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = async data =>{
  const userinfo={
    email:data.email,
    password:data.password
  }
  await axios.post("http://localhost:3000/user/login",userinfo)
  .then((res)=>{
    if (res.data) {
      toast.success("Loggedin Successfully");
      document.getElementById("my_modal_3").close();
      setTimeout(() => {
        window.location.reload();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }, 1000);
    }
  }).catch((err)=>{
    if(err.response)
   {
    toast.error("Error: " + err.response.data.message);
    setTimeout(() => {}, 2000);
   }
  })
};

  return (
   <>
   <div>
   {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
   
    <h3 className="font-bold text-xl mb-4">Login</h3>
    <div>
        <span className='font-bold'>Email</span>
        <br />
        <input type="text" 
         placeholder="Enter your email"
        className="w-80 px-3 py-1 border rounded-md outline-none" 
        {...register("email", { required: true })}
        />
       <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
         )}

    </div>
    <br />
    <div>
        <span className='font-bold'>Password</span>
        <br />
        <input type="password"  placeholder="Enter your password"
        className="w-80 px-3 py-1 border rounded-md outline-none" 
        {...register("password", { required: true })}
        />
                      <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
        )}
        <div className="flex justify-between mt-6">
              <button className="bg-pink-500 text-white rounded-md px-2 py-2 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>

    </div>
    
        </form>
  </div>
</dialog>
   </div>
   </>
  );
}

export default Login
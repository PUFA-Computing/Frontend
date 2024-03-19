"use client";
import React, { useState } from "react";
import { Login } from "@/services/api/auth";
import Swal from "sweetalert2";
import Seperator from "@/components/Seperator";

interface LoginFormProps {
   onLoginSuccess: (access_token: string, userId: string) => void;
}

type ErrorResponse = {
   success: boolean;
   message: string;
   data: {};
};

export default function LoginForm() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   // Regular expression for basic email validation
   // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   // const isEmailValid = (email: string) => {
   //    return emailRegex.test(email);
   // };

   // TODO if there is @ in the input, it will be considered as email else it will be considered as username

   const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         const data = await Login(username, password);
         successLogin(data);
      } catch (error: any) {
         console.error(error.response); // This might give you more details
         setError(error.message);
      }
   };

   const successLogin = (access: any) => {
      Swal.fire({
         icon: "success",
         title: "Login Success",
         text: "You are now logged in",
         showConfirmButton: false,
         timer: 2000,
      }).then(() => {
         console.log(access.data);
         localStorage.setItem(
            "access_token",
            access.data.access_token
         );
         localStorage.setItem("userId", access.data.user_id);
         window.location.href = "/dashboard/profile";
      });
   };

   return (
      <section className="mx-auto max-w-6xl rounded-md bg-white bg-opacity-40 p-6 shadow-md">
         <div>
            <div className="flex flex-col items-center justify-between md:flex-row">
               <div className="mb-4 text-[#353535] md:mb-0 md:mr-10">
                  <p className="text-base font-normal md:text-lg">
                     Hello, Computizens!
                  </p>
                  <p className="text-lg font-semibold md:text-2xl">
                     Let’s Sign In Folks
                  </p>
               </div>
               <div className="flex space-x-2">
                  <img
                     src="../logo/PUFA_Computing.png"
                     alt="PUFA Computing Logo"
                     className="h-12 w-12 md:h-16 md:w-16"
                  />
                  <img
                     src="../PU.png"
                     alt="PU Logo"
                     className="h-12 w-12 md:h-16 md:w-16"
                  />
               </div>
            </div>
            <div className="my-4">
               <div className="border-t border-[#D1D5DB]"></div>
            </div>
         </div>
         <form onSubmit={handleLogin}>
            <div className="mt-8">
               <div className="relative flex items-center">
                  <span className="absolute"></span>
                  <input
                     type="text"
                     className="block w-full rounded-lg border bg-white px-6 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-blue-300 md:px-10"
                     placeholder="Email or Username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>
            </div>

            <div className="mt-4">
               <div className="relative flex items-center">
                  <span className="absolute"></span>
                  <input
                     type="password"
                     className="block w-full rounded-lg border bg-white px-6 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-blue-300 md:px-10"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
            </div>

            <div className="mt-6">
               {error && <div className="error my-2 text-red-500">{error}</div>}
               <button
                  type="submit"
                  className="w-full transform rounded-lg border border-[#6B7280] bg-white px-6 py-3 text-sm font-medium capitalize tracking-wide text-[#6B7280] transition-colors duration-300 hover:bg-[#6B7280] hover:text-white"
               >
                  Sign in
               </button>
            </div>
         </form>
      </section>
   );
}

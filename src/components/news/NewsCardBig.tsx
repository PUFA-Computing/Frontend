"use client";
import React, { useState } from "react";

interface NewsCardBigProps {
   image: string;
   title: string;
   description: string;
   time: string;
}

export default function NewsCardBig({
   image,
   title,
   description,
   time,
}: NewsCardBigProps) {
   return (
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
         <img
            alt="Office"
            src={image}
            className="absolute inset-0 h-full w-full object-cover"
         />

         <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
               <time className="block text-xs text-white/90">{time}</time>

               <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">{title}</h3>
               </a>

               <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  {description}
               </p>
            </div>
         </div>
      </article>
   );
}

import React from "react";

interface InputProps {
   type: string;
   placeholder: string;
   htmlFor: string;
   label: string;
}

export default function Input({ type, placeholder, label, htmlFor }: InputProps) {
   return (
      <div>
         <label className="mb-1 block text-sm font-medium" htmlFor={htmlFor}>
            {label}
         </label>
         <input
            type={type}
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={placeholder}
         />
      </div>
   );
}

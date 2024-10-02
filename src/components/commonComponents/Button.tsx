import { useEffect } from "react";

export interface ButtonProps {
    className?: string,
    name: string,
    onClick:()=> void,
    variant?: 'PRIMARY' | "SECONDARY",
    size?: 'sm' | 'lg' | 'md'
}
const Button = ({className = "", name, onClick, variant = "PRIMARY", size = 'md'}: ButtonProps) => {
  const variantType = variant === "PRIMARY" ? "w-44 font-bold h-12 text-lg focus:outline-none" : "focus:ring-4 focus:outline-none focus:ring-slate-300 flex items-center justify-center";
  let sizeType: string = ""
  if (size === "sm"){
    sizeType = "w-12 h-10"
  }
  else if (size === "md"){
    sizeType = "w-36 h-12"
  }
  return (
    <>
    <button className={`rounded text-white ${sizeType} ${className} ${variantType}`} onClick={onClick}>{name}</button>
    </>
  )
}

export default Button

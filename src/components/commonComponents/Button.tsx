import "../../assets/scss/Button.scss"

interface ButtonProps {
    className?: string,
    name: string,
    onClick?:()=> void,
    variant?: "PRIMARY" | "SECONDARY",
    size?: "sm" | "lg" | "md"
}
const Button = ({className = "", name, onClick, variant = "PRIMARY", size = "md"}: ButtonProps) => {
  return (
    <>
    <button className={`rounded text-white ${size} ${className} ${variant}`} onClick={onClick}>{name}</button>
    </>
  )
}

export default Button

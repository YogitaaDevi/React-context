export interface ButtonProps {
    className?: string,
    name: string,
    onClick:()=> void,
    variant?: 'PRIMARY' | "SECONDARY"
}
const Button = ({className = "", name, onClick, variant = "PRIMARY"}: ButtonProps) => {
  return (
    <>
    <button className={className} onClick={onClick}>{name}</button>
    </>
  )
}

export default Button

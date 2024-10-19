interface TextFieldProps {
  className?: string,
  onChange?: (e: any) => void,
  onClick?: (e: any) => void,
  type: string,
  placeholder?: string
}
const TextField = ({ className = "", onChange, type = "text", placeholder, onClick }: TextFieldProps) => {
  return (
    <input className={className} onChange={onChange} type={type} placeholder={placeholder} onClick={onClick} />
  )
}

export default TextField
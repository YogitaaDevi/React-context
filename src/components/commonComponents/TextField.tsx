interface TextFieldProps{
    className?: string, 
    onChange?: (e: any)=> void,
    onClick?: (e: any) => void,
    type: string,
    value?: string,
    placeholder?: string 
}
const TextField = ({className="", onChange, type="text", placeholder, value, onClick}: TextFieldProps) => {
  return (
    <>
    <input className={className} onChange={onChange} type={type} placeholder={placeholder} value={value} onClick={onClick} />
    </>
  )
}

export default TextField
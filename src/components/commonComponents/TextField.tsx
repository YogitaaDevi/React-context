interface TextFieldProps{
    className?: string, 
    onChange: ()=> void,
    type: string,
    value?: string,
    placeholder?: string 
}
const TextField = ({className="", onChange, type="text", placeholder, value}: TextFieldProps) => {
  return (
    <>
    <input className={className} onChange={onChange} type={type} placeholder={placeholder} value={value} />
    </>
  )
}

export default TextField
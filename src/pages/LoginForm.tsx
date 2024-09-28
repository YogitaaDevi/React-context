import { useState } from "react"
import TextField from "../components/commonComponents/TextField"
import Button from "../components/commonComponents/Button";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [name, setName] = useState<string>("")
  const [nameError, setNameError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("")
  const [passowrdError, setPasswordError] = useState<string>("")
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name === "" && password === "") {
      setNameError("Username is required*")
      setPasswordError("Password is required*")
  }
  else if (name === "") {
      setNameError("Username is required*")
      setPasswordError("")
  }
  else if (name === "null") {
      setNameError("Provide valid username*")
      setPasswordError("")
  }
  else if (password === "") {
      setPasswordError("Password is required*")
      setNameError("")
  }
  else if (password.length < 6 || password.length > 8) {
      setPasswordError("Password must be 6 to 8 characters*")
      setNameError("")
  }
  else {
      setNameError("")
      setPasswordError("")
      navigate("/home", { replace: true })
  }

  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-1/3 h-3/4 border flex flex-col gap-10 shadow-xl rounded-lg">
        <div className="text-2xl font-bold flex h-20 items-center justify-center">Login Form</div>
        <div className="h-full flex flex-col items-center">
          <div className="mb-8">
            <TextField className="border-2 rounded-md h-10 w-72 pl-2" type="text" placeholder="Enter your username" onChange={(e: any) => setName(e.target.value)} />
            <div className="text-red-500 text-sm">{nameError}</div>
          </div>
          <div className="mb-3">
            <TextField className="border-2 rounded-md h-10 w-72 pl-2" type={showPassword ? "text" : "password"} placeholder="Enter your password" onChange={(e: any) => setPassword(e.target.value)} />
            <div className="text-red-500 text-sm">{passowrdError}</div>
          </div>
          <div className="flex gap-10 text-gray-500 items-center mt-2">
            <div>
              <TextField type="checkbox" onClick={() => setShowPassword((prev) => !prev)} />
              Show password
            </div>
            <a href="">Forget Password?</a>
          </div>
          <Button className="mt-10 w-48 bg-stone-500 text-white" name="Login" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}
export default LoginForm
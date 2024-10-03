import { useCallback, useContext, useMemo, useState } from "react"
import TextField from "../components/commonComponents/TextField"
import Button from "../components/commonComponents/Button";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { users } from "../data/Users";

const LoginForm = () => {

  const [name, setName] = useState<string>("")
  const [nameError, setNameError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("")
  const [passowrdError, setPasswordError] = useState<string>("")
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContextProvider)

  const user = useMemo(() =>
    users.find((data) => data.name === name && data.password === password), [name, password]);

  const handleSubmit = useCallback(() => {

    if (name === "" && password === "") {
      setNameError("Username is required*");
      setPasswordError("Password is required*");
    } 
    else if (name === "") {
      setNameError("Username is required*");
      setPasswordError("");
    } 
    else if (name === "null") {
      setNameError("Provide valid username*");
      setPasswordError("");
    } 
    else if (password === "") {
      setPasswordError("Password is required*");
      setNameError("");
    } 
    else if (password.length < 6 || password.length > 8) {
      setPasswordError("Password must be 6 to 8 characters*");
      setNameError("");
    } 
    else if (!user) {
      setNameError("");
      setPasswordError("Username or Password is incorrect*");
    } 
    else {
      setNameError("");
      setPasswordError("");
      handleLogin(user);
      navigate("/home", { replace: true });
    }
  }, [name, password, user]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-98 border flex flex-col gap-5 shadow rounded-lg bg-slate-200">
        <div className="text-2xl font-bold flex h-20 items-center justify-center">Login</div>
        <div className="h-full flex flex-col items-center">
          <div className="mb-8">
            <TextField className="border-2 border-white rounded-md h-10 w-72 pl-2 focus:outline-none" type="text" placeholder="Enter your username" onChange={(e: any) => setName(e.target.value)} />
            <div className="text-red-500 text-sm">{nameError}</div>
          </div>
          <div className="mb-3">
            <TextField className="border-2 border-white rounded-md h-10 w-72 pl-2 focus:outline-none" type={showPassword ? "text" : "password"} placeholder="Enter your password" onChange={(e: any) => setPassword(e.target.value)} />
            <div className="text-red-500 text-sm">{passowrdError}</div>
          </div>
          <div className="flex gap-10 text-gray-500 items-center mt-2">
            <div>
              <TextField type="checkbox" onClick={() => setShowPassword((prev) => !prev)} />
              Show password
            </div>
            <a href="">Forget Password?</a>
          </div>
          <Button className="bg-slate-700 mt-10" name="Submit" onClick={handleSubmit} variant="PRIMARY" />
        </div>
      </div>
    </div>
  )
}
export default LoginForm
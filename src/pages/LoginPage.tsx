import { useCallback, useContext, useMemo, useState } from "react"
import TextField from "../components/commonComponents/TextField"
import Button from "../components/commonComponents/Button";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { users } from "../data/Users";
import { HOME } from "../utils/constants";

const LoginPage = () => {

  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState({name: "", password: ""});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContextProvider)

  const user = useMemo(() =>
    users.find((data) => data.name === name && data.password === password), [name, password]);

  const handleSubmit = useCallback((event: any) => {
    event?.preventDefault()
    if (name === "" && password === "") {
      setError((prev) => prev = { name: "Username is required*", password: "Password is required*"})
    } 
    else if (name === "") {
      setError((prev) => prev = {name: "Username is required*", password: ""})
    } 
    else if (name === "null") {
      setError((prev) => prev = {name: "Provide valid username*", password: ""})
    } 
    else if (password === "") {
      setError((prev) => prev =  {name: "", password: "Password is required*"})
    } 
    else if (password.length < 6 || password.length > 8) {
      setError((prev) => prev =  {name: "", password: "Password must be 6 to 8 characters*"})
    } 
    else if (!user) {
      setError((prev) => prev =  {name: "", password: "Username or Password is incorrect*"})
    } 
    else {
      setError((prev) => prev =  {name: "", password: ""})
      handleLogin(user);
      navigate(HOME, { replace: true });
    }
  }, [name, password, user]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <form className="w-98 border flex flex-col gap-5 shadow rounded-lg bg-slate-200" onSubmit={handleSubmit}>
        <div className="text-2xl font-bold flex h-20 items-center justify-center">Login</div>
        <div className="h-full flex flex-col items-center">
          <div className="mb-8">
            <TextField className="border-2 border-white rounded-md h-10 w-72 pl-2 focus:outline-none" type="text" placeholder="Enter your username" onChange={(e: any) => setName(e.target.value)} />
            <div className="text-red-500 text-sm">{error.name}</div>
          </div>
          <div className="mb-3">
            <TextField className="border-2 border-white rounded-md h-10 w-72 pl-2 focus:outline-none" type={showPassword ? "text" : "password"} placeholder="Enter your password" onChange={(e: any) => setPassword(e.target.value)} />
            <div className="text-red-500 text-sm">{error.password}</div>
          </div>
          <div className="flex gap-10 text-gray-500 items-center mt-2">
            <div className="flex gap-1">
              <TextField type="checkbox"  onClick={() => setShowPassword((prev) => !prev)} />
              Show Password
            </div>
            <a href="">Forget Password?</a>
          </div>
          <Button className="bg-slate-700 hover:bg-slate-500 mt-10" name="Submit" size="lg"/>
        </div>
      </form>
    </div>
  )
}
export default LoginPage
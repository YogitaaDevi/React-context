import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import Button from "../components/Button";
import { apiService } from "../services/apiService";
import { AUTH, DASHBOARD } from "../utils/constants";
import { AuthContextProvider } from "../context/AuthContext";
import { UserAction } from "../enum/userAction";
import { useNavigate } from "react-router-dom";

interface LoginPageValues {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { dispatch } = useContext(AuthContextProvider);
  const navigate = useNavigate();

  const initialValues: LoginPageValues = { username: "", password: "" };

  const validations = Yup.object({
    username: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/,
        "Provide a valid username."
      )
      .test("ideas2it-domain", "Email must belong to ideas2it.com", (value) =>
        value?.endsWith("@ideas2it.com")
      )
      .required("Username is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Z]/, "Password must contain atleast one uppercase letter")
      .matches(/[a-z]/, "Password must contain atleast one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain atleast one special character"
      )
      .required("Password is required"),
  });

  const handleSubmit = (
    values: LoginPageValues,
    { setSubmitting }: FormikHelpers<LoginPageValues>
  ) => {
    apiService
      .post(AUTH, {
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        const accessToken = response.data.entity.accessToken;
        localStorage.setItem("accessToken", accessToken);

        dispatch({ type: UserAction.AUTHENTICATE_USER });
        navigate(DASHBOARD, { replace: true });
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-98 border flex flex-col gap-5 shadow rounded-lg bg-slate-200 p-5">
            <div className="text-2xl font-bold flex h-20 items-center justify-center">
              Login
            </div>
            <div className="h-full flex flex-col items-center">
              <div className="mb-8">
                <Field
                  className="border-2 border-white rounded-md h-10 w-72 pl-2 focus:outline-none"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-3">
                <Field
                  className="border-2 border-white rounded-md h-10 w-72 pl-2 focus:outline-none"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex gap-10 text-gray-500 items-center mt-2">
                <div className="flex gap-1">
                  <Field
                    type="checkbox"
                    name="showPassword"
                    id="showPassword"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                  <label htmlFor="showPassword">Show Password</label>
                </div>
                <a href="/">Forget Password?</a>
              </div>
              <Button
                name={isSubmitting ? "Logging in" : " Login "}
                className="bg-slate-700 hover:bg-slate-500 mt-10 text-sm"
                disabled={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginPage;

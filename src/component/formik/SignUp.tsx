import { TextField, Button } from "@mui/material";
import "./SignUp.css";
import { Formik, Form } from "formik";
import InputField from "./InputField";
import * as Yup from "yup";

const SignUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  console.log();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <Form className="form">
            <InputField label="First Name" name="firstName" type="text" />
            <InputField label="last Name" name="lastName" type="text" />
            <InputField label="Email" name="email" type="email" />
            <InputField label="password" name="password" type="password" />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained" type="submit">
                Register{" "}
              </Button>
              <Button variant="outlined" type="reset">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;

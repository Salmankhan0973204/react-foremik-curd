import "./SignUp.css";
import { useField, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";
import { BiErrorCircle } from "react-icons/bi";

const InputField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="form_input">
      <TextField
        className={`form-control ${meta.touched && meta.error ? 'error-border' : ''}`}
  
        label={label}
        {...field}
        {...props}
        autoComplete="off"
      />

     <span className="error-icon">{meta.touched && meta.error ? <BiErrorCircle/> : null}</span> 
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default InputField;

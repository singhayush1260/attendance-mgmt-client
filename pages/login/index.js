import classes from "../../styles/pages/Login.module.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { loginSchema } from "@/src/config/form-validation-schemas/loginSchema";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {},
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className={classes.page_wrapper}>
      <div className={classes.main_container}>
        <div className={classes.left}>
          <img src="/images/login_graphics.png" />
        </div>
        <div className={classes.right}>
          <form className={classes.form_container} onSubmit={handleSubmit}>
            <div className={classes.title_container}>
              <p className={classes.title}>Login to your Account</p>
            </div>
            <br />
            <div className={classes.input_container}>
              <label className={classes.input_label}>Email</label>
              <MdOutlineMailOutline className={classes.icon} />
              <input placeholder="name@mail.com" name="Email" value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className={`${classes.input_field} ${errors.Email && touched.Email && classes.input_error}`}
              />
            </div>
            {errors.Email && touched.Email ? (
              <small className={classes.error_msg}><p>{errors.Email}</p></small>) : null}
            <div className={classes.input_container}>
              <label className={classes.input_label}>Password</label>
              <RiLockPasswordLine className={classes.icon} />
              <input placeholder="Password" name="Password"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                className={`${classes.input_field} ${errors.Password && touched.Password && classes.input_error}`}
              />
            </div>
            {errors.Password && touched.Password ? (
              <small className={classes.error_msg}><p>{errors.Password}</p></small> ) : null}
           <fieldset id="authorisation">
              <div><input type="radio" value="faculty" name="authorisation" />Faculty</div>
              <div>
                <input type="radio" value="student" name="authorisation" /> Student</div>
            </fieldset>
            <button className={classes.signin_btn}type="submit"> Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

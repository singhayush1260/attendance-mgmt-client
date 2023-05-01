import classes from "../../styles/pages/Register.module.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {AiOutlineUser} from 'react-icons/ai'
import { registerSchema } from "@/src/config/form-validation-schemas/registerSchema";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
   
   const initialValues={
    Name:"",Email:"",Password:""
   }
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values) => {
        console.log(errors,values);
      },
    });

const register=()=>{
    console.log(Object.keys(values).length)
    if(Object.keys(values).length>=4){
     handleSubmit();
    }else{
        toast.error(' All fields must be complete before registering.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: "colored",
            });
    }
}
  return (
    <div className={classes.page_wrapper}>
       <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false}
       closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover theme="colored"/>
      <div className={classes.main_container}>
        <div className={classes.left}>
          <img src="/images/login_graphics.png" />
        </div>
        <div className={classes.right}>
          <form className={classes.form_container} onSubmit={handleSubmit}>
            <div className={classes.title_container}>
              <p className={classes.title}>Create your Account</p>
            </div>
            <br />
            <div className={classes.input_container}>
              <label className={classes.input_label}>Name</label>
              <AiOutlineUser className={classes.icon} />
              <input placeholder="Name" name="Name"
                value={values.Name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className={`${classes.input_field} ${errors.Name && touched.Name && classes.input_error}`}
              />
            </div>
            {errors.Name && touched.Name ? (<small className={classes.error_msg}> <p>{errors.Name}</p> </small> ) : null}
            <div className={classes.input_container}>
              <label className={classes.input_label}>Email</label>
              <MdOutlineMailOutline className={classes.icon} />
              <input placeholder="name@mail.com" name="Email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className={`${classes.input_field} ${ errors.Email && touched.Email && classes.input_error}`}
              />
            </div>
            {errors.Email && touched.Email ? ( <small className={classes.error_msg}> <p>{errors.Email}</p> </small> ) : null}
            <div className={classes.input_container}>
              <label className={classes.input_label}> Password </label>
              <RiLockPasswordLine className={classes.icon} />
              <input placeholder="Password" name="Password"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                className={`${classes.input_field} ${ errors.Password && touched.Password && classes.input_error}`}
              />
            </div>
            {errors.Password && touched.Password ? ( <small className={classes.error_msg}> <p>{errors.Password}</p> </small> ) : null}
            <fieldset id="authorisation" value={values.Authorisation} onChange={handleChange}>
              <div><input type="radio" value="faculty" name="authorisation" />Faculty</div>
              <div><input type="radio" value="student" name="authorisation" />Student</div>
            </fieldset>
            <button title="register" onClick={register} className={classes.signin_btn}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;

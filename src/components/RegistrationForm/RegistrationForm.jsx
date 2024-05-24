import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import { useId } from "react";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const paswordId = useId();


  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="nameId" >
          Username
          <Field className={css.input} type="text" name="name" id="nameId" />
        </label>
        <label className={css.label} htmlFor="emailId">
          Email
          <Field className={css.input} type="email" name="email" id="emailId" />
        </label>
        <label className={css.label} htmlFor="paswordId" >
          Password
          <Field className={css.input} type="password" name="password" id="paswordId" />
        </label>
        <button className={css.btn} type="submit">Register</button>
      </Form>
    </Formik>
  );
}
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { useId } from 'react';

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailId = useId();
  const paswordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(reponse => {
        console.log(reponse);
        toast.success("Success!!!");
      })
      .catch(error => {
        console.log(error);
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} htmlFor="emailId">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" autoComplete="email" id="emailId"/>
        </label>
        <label className={css.label} htmlFor="paswordId">
          Password
          <Field className={css.input} type="password" name="password" autoComplete="current-password" id="paswordId"/>
        </label>
        <button className={css.btn} type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
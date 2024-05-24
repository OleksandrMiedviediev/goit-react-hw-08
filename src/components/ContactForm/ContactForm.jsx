import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from "./ContactForm.module.css"
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3,'Too short!').max(50, 'Too Long!').required('Required!'),
  number: Yup.string().min(3,'Too short!').max(50, 'Too Long!').required('Required!'),
})

export default function ContactForm() {
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
    actions.resetForm();
}
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik initialValues={
      {
        name: "",
        number: "",
      }
    }
      validationSchema = {ContactSchema}
      onSubmit={handleSubmit}>
      <Form className={css.container}>
        <label htmlFor={nameId}>Name:</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error} name='name' component="span"/>
        <label htmlFor={numberId}>Number:</label>
        <Field type="text" name="number" id = {numberId}/>
        <ErrorMessage className={css.error} name='number' component="span"/>
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}
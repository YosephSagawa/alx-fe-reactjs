import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <Field
            type="text"
            name="username"
            placeholder="Please enter your name"
          />
          <ErrorMessage name="username" component="div" />
          <Field
            type="email"
            name="email"
            placeholder="Please enter your email:"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            name="password"
            placeholder="Please enter your password:"
          />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;

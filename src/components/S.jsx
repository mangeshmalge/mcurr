import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function S() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
  });
const handleSubmit=(value)=>{
  console.log(value);
}
  return (
    <div className='container'>
      <Formik 
      initialValues={{
        name:"",
        email:"",
        password:"",
        c_password:""
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
      >
          {
            ({errors,touched})=>(
              <Form>
                  <Field name="name" type="name" className="form-control"/>
                  {errors.name && touched.name ? <div className='text-danger'>{errors.name}</div>:null}
                  <br />
                  <Field name="email" type="email" className="form-control"/>
                  {errors.email && touched.email ? <div className='text-danger'>{errors.email}</div>:null}
                  <br />
                  <Field name="password" type="password" className="form-control"/>
                  {errors.password && touched.password ? <div className='text-danger'>{errors.password}</div>:null}
                  <br />
                  <Field name="c_password" type="password" className="form-control"/>
                  {errors.c_password && touched.c_password ? <div className='text-danger'>{errors.c_password}</div>:null}
                  <br />
                  <button className='btn btn-success' type="submit">Register</button>
              </Form>
            )
          }
      </Formik>
    </div>
  )
}

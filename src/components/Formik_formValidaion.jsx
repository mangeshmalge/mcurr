import React from 'react'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'

export default function Formik_formValidaion() {
  const initial={
    name:"",
    email:"",
    password:"",
    // confirm_password:"",
  }
  const signup=Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
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
        initialValues={initial}
          validationSchema={signup}
        onSubmit={handleSubmit}>
            {
              ({errors,touched})=>(
                <Form>

                <Field name="name" className="form-control"/>
                {errors.name && touched.name ? <div className='text-danger'>{errors.name}</div>:null }
                <br />
                <Field name="email" className="form-control"/>
                {errors.email && touched.email ? <div className='text-danger'>{errors.email}</div>:null }
                <br />
                <Field type="password" name="password" className="form-control"/>
                {errors.password && touched.password ? <div className='text-danger'>{errors.password}</div>:null }
                <br />
                <button className='btn btn-dark' type="submit">Register</button>
                {/* <button className='btn btn-danger ms-2'>Reset</button> */}
            </Form>
              )
            }
        </Formik>
    </div>
  )
}

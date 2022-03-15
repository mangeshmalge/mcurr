import React, { useEffect, useState } from 'react'

export default function FormValidation() {
    const initials={username:"",email:"",password:""}
    const [formValues,setformValues]=useState(initials)
    const [formErrors,setformErrors]=useState({})
    const [isSubmit,setisSubmit]=useState(false)

    const handleOnchange=(e)=>{
        const {name,value}=e.target
        setformValues({...formValues,[name]:value})
        // console.log(formValues)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setformErrors(validate(formValues))
        setisSubmit(prev=>!prev)
    }
    useEffect(() => {
        console.log(formErrors);
        console.log(Object.keys(formErrors));
      if (Object.keys(formErrors).length===0 && isSubmit) {
          console.log(formValues);
      }
    }, [isSubmit])
    
    const validate=(values)=>{
        const errors = {}
        if(!values.username){
            errors.username="username is required"
        }
        if(!values.email){
            errors.email="email is required"
        }
        if(!values.password){
            errors.password="password is required"
        }else if(values.password.length < 4){
            errors.password="password must be more than four digit"
        }else if(values.password.length  > 10){
            errors.password="password should be less than ten digit"
        }
        return errors
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
            {Object.keys(formErrors).length===0 && isSubmit?<p className='alert alert-success'>successfully signed in </p>:JSON.stringify(formValues)}
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="">Username</label>
                                <input type="text" className='form-control' value={formValues.username} name="username" onChange={handleOnchange} />
                            </div>
                            <p className='text-danger'>{formErrors.username} </p>
                            <div>
                                <label htmlFor="">Username</label>
                                <input type="email"  value={formValues.email}  className='form-control' name="email" onChange={handleOnchange} />
                            </div>
                            <p className='text-danger'>{formErrors.email} </p>
                            <div>
                                <label htmlFor="">Username</label>
                                <input type="password"  value={formValues.password}  className='form-control' name="password" onChange={handleOnchange} />
                            </div>
                            <p className='text-danger'>{formErrors.password} </p>
                            <br />
                            <button className='btn btn-success w-100'>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

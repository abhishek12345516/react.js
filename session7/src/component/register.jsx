import { useState } from "react";

function Register() {
    const [user,setUser] = useState ({name:'',email:'',username:'',password:''});
    const [validationError, setValidationError] = useState({});
    const validationForm = () =>{
        const errors = {};
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(!user.name){
            errors.name = 'Name is required';
        }
        if(!user.email){
            errors.email = 'Email is required';
        }else if(!emailPattern.test(user.email)){
            errors.email = 'Email is not valid';
        }
        if(!user.username){
            errors.username = 'Username is required';
        }
        if(!user.password){
            errors.password = 'Password is required';
        }else if(!user.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
            errors.password = 'Password must be at least 8 characters long and contain at least one number, one uppercase letter, and one lowercase letter';
        }
        return errors;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const errors = validationForm();
        console.log(errors);
        if(Object.keys(errors).length=== 0){
            setValidationError({});
            alert('Form is submitted for Approval')
        }else{
            setValidationError(errors);
        }
       
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div className={`form-group mt-3 ${validationError.name ? 'has-error':''}`}>
                <label htmlFor="name"> Name</label>
                <input type="text"  placeholder="Enter your Name" 
                className={`form-control ${validationError.name ? 'is-invalid':''}`}
                onChange={(e)=>setUser({...user,name:e.target.value})}/>
                {
                    validationError.name && <div className="invalid-feedback">{validationError.name}</div>
                }
            </div>
            <div className={`form-group mt-3 ${validationError.email ? 'has-error':''}`}>
                <label htmlFor="Email">Email</label>
                <input type="email"  placeholder="Enter your Email" 
                className={`form-control ${validationError.email ? 'is-invalid':''}`}
                onChange={(e)=>setUser({...user,email:e.target.value})}/>
                 {
                    validationError.email && <div className="invalid-feedback">{validationError.email}</div>
                }
            </div>
            <div className={`form-group mt-3 ${validationError.username ? 'has-error':''}`}>
                <label htmlFor="username">Username</label>
                <input type="text"  placeholder="Enter your Username" 
                 className={`form-control ${validationError.username ? 'is-invalid':''}`}
                onChange={(e)=>setUser({...user,username:e.target.value})}/>
                {
                    validationError.username && <div className="invalid-feedback">{validationError.username}</div>
                }
            </div>
            <div className={`form-group mt-3 ${validationError.password ? 'has-error':''}`}>
                <label htmlFor="password">Password</label>
                <input type="password"  placeholder="Enter your Password"
                 className={`form-control ${validationError.password ? 'is-invalid':''}`} 
                onChange={(e)=>setUser({...user,password:e.target.value})}/>
                {
                    validationError.password && <div className="invalid-feedback">{validationError.password}</div>
                }
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
        </form>
     );
}

export default Register;
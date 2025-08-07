import { useForm } from "react-hook-form";

function FormDemo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleregistration = (data) => console.log(data)
    const handleError = (errors) => { }
    const registerOption = {
        name: { required: 'Name is required' },
        email: { required: 'Email is required' },
        password: {
            required: 'Password is required',
            minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long'
            }
        }
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit(handleregistration, handleError)}>
               <label htmlFor="name">Enter Your Name:</label>
               <input type="text" className="form-control w-50 " aria-describedby="passwordHelpInline"  {...register('name', registerOption.name)} />
                {errors.name && <p  className="text-danger">{errors.name.message}</p>}<br/>
               <label htmlFor="email">Enter Your Email:</label>
               <input type="text" className="form-control w-50" aria-describedby="passwordHelpInline" {...register('email', registerOption.email)} />
               {errors.email && <p  className="text-danger">{errors.email.message}</p>}<br/>
               <label htmlFor="password">Enter Your Password:</label>
               <input type="password" className="form-control w-50" aria-describedby="passwordHelpInline" {...register('password', registerOption.password)} />
               {errors.password && <p className="text-danger">{errors.password.message}</p>}<br/>
               <button type="submit" className="btn btn-primary w-50">Submit</button>
            </form>
        </div>
    );
}

export default FormDemo;
// import { useContext } from "react";
// import { authContxt } from "../../AuthProvider/Authprovider";

import { useContext } from "react";
import { authContxt } from "../../AuthProvider/Authprovider";
import { Link } from "react-router-dom";

const Register = () => {
    const {createUser} = useContext(authContxt);

    const handleRegisterFrom = (e) =>{
        e.preventDefault()
   
        const name = e.target.name.value;
        const email = e.target.email.value;
        const passwprd = e.target.password.value;
       createUser(email,passwprd)
       .then((res =>{
        console.log(res.user);
       }))
       .catch((error)=>{
        console.log(error.message);
       })



    } 


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    
                    <form onSubmit={handleRegisterFrom} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <p className="underline text-blue-900"><Link to={'/login'}>Sign In Now</Link></p>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Register;
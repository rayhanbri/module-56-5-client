import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const SignUP = () => {
    // ekto test korchi kaj korche ki na 

    const {createUser}= use(AuthContext)

    console.log(createUser)
  

    const handleSignUP = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const email = formData.get('email')
        const password = formData.get('password')
        // console.log(email,password)

        // create  user in firebase 
        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })


    }


    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Signup now!</h1>
        <form onSubmit={handleSignUP} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUP;
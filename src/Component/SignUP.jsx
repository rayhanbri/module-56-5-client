import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const SignUP = () => {
    // ekto test korchi kaj korche ki na 

    const { createUser } = use(AuthContext)

    // console.log(createUser)


    const handleSignUP = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)

        const { email, password, ...rest } = Object.fromEntries(formData.entries())



        // const email = formData.get('email')
        // const password = formData.get('password')
        // console.log(email, password, userProfile)

        // create  user in firebase 
        createUser(email, password)
            .then(result => {
                console.log(result.user)

                // bhul kore email patathe bhule gechi tai abar patacci 
                // aro extra information patabo 

                const userProfile = {
                    email,
                    ...rest,
                    creationTime : result.user.metadata.creationTime,
                    lastSignInTime : result.user.metadata.lastSignInTime,
                }
                // save profile in data base 
                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after posting', data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your Profile has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
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
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            {/* Address  */}
                            <label className="label">Address</label>
                            <input type="text" name='address' className="input" placeholder="Address" />
                            {/* Phone  */}
                            <label className="label">Phone</label>
                            <input type="text" name='phone' className="input" placeholder="Phone" />
                            {/* Photo  */}
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" />
                            {/* Email  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            {/* Password  */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;
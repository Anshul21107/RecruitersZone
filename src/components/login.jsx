// src/components/Login.js
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase.config';
import image_6 from "../Image/login.jpg";
const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
     .then((res) =>{
        console.log(res);
        setEmail('');
        setPassword('');
        navigate("/");
     })
     .catch((error) => alert("Error: " + error));
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover" style={{
      backgroundImage: `url(${image_6})`,
    }}>
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Enter Email address'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Enter Password'
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </button>
            <p className='text-xs p-4 font-bold'>Don't have an Account? 
                <span className='mx-2 text-blue-500'>
                    <Link to = "/signup">SignUp</Link>
                </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

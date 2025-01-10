import {Link} from "react-router-dom";
import {useRef} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Signup(){

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const {setUser,setToken} = useStateContext()


  const onSubmit = (e) => {
    e.preventDefault();

    const payLoad = {
      name : nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmation:passwordConfirmationRef.current.value,

    }
   axiosClient.post("/signup",payLoad).
     then(({data}) => {

     setUser(data.user);
      setToken(data.token);

   })
     .catch((error) => {

       const response = error.response;
       if(response && response.status === 422) {

         console.log(response.data.errors );
       }
     })
  }

    return (
      <div className="Login-signup-form animated fadeInDown">
        <div className="form">
          <form onSubmit={onSubmit}>
            <h1>Sign Up for Free</h1>
            <input ref={nameRef} placeholder="Full Name"/>
            <input ref={emailRef} placeholder="Email Address" name="email" type="email"/>
            <input  ref={passwordRef} placeholder="Password" name="password" type="password"/>
            <input ref={passwordConfirmationRef} placeholder="Password Confirmation" name="password" type="password"/>
            <button className="btn btn-block">Sign up</button>
            <p className="message">
              Already Registered? <Link to="/signup">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    )
}

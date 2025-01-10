import {Link} from "react-router-dom";

export default function Login(){

  const onSubmit = (ev) => {
    ev.preventDefault();
  }

 return (
 <div className="Login-signup-form animated fadeInDown">
    <div className="form">
      <form onSubmit={onSubmit}>
        <h1>Log in to your account</h1>
        <input placeholder="Email" name="email" type="email" />
        <input placeholder="Password" name="password" type="password" />
        <button className="btn btn-block">Login</button>
        <p className="message">
          Not Registered?  <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </div>
 </div>
 )
}

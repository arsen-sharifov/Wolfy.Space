import "./styles/style.css";

export default function Welcome() {
  return (
   <div className="wrapper">
    <div>
      <h2>Welcome to Wolfy.space!</h2>
      <h2>Customize your profile, share posts, play games, and connect with friends in the ultimate social network experience</h2>
      <div className="container">
        <div className="header">
          <span className="signIn">Sign In</span>
          <span className="signUp">Sign Up</span>
        </div>
        <div className="form">
          <input type="text" placeholder="Login" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button className="button">Go!</button>
        </div>
      </div>
    </div>
    <div><img src='/logo.png' alt="Logo" width={544} height={674}></img></div>
  </div>
  );
}

import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

export function Login() {
  const location = useLocation();
  console.log(location);
  
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasUser, setHasUser] = useState(false);
  const navigate = useNavigate;
  
  const onLogin = (e: any) => {
    e.preventDefault();
    console.log("event: ", e.target);
    const formData = new FormData(e.target);
    
    const username = String(formData.get("username"));
    const password = String(formData.get("password"));
    const repass = String(formData.get("repass"));
    console.log(username, password, repass);
    
    useEffect(() => {
      if (hasUser) {
        navigate("/", {
          state: hasUser
        });
      };
    },[hasUser])
    
    if (username.length < 3) {
      return setUsernameError("<3");
    } else {
      setUsernameError("");
    }

    if (password.length < 5) {
      return setPasswordError(">=5");
    } else if (password.includes("&")) {
      return setPasswordError("can't");
    } else {
      setPasswordError("");
    }

    setHasUser(true);
    e.target.reset()

      

  return (
    <>
      <h1>Login Here</h1>
      {location.state && <p>this To do is comleted, you can Sign in</p>}
      {/* {!location.state && ( */}

      {hasUser && <h1> User is loged in</h1>}
      <form onSubmit={onLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>{usernameError.length > 0 && <p>Username is required</p>}</div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>{passwordError.length > 0 && <p>{passwordError}</p>}</div>
        <div>
          <label htmlFor="repass">Repeat password:</label>
          <input type="password" id="repass" name="repass" />
        </div>
        <input type="submit" value="Login" />
      </form>
      {/* )} */}
    </>
  );
}

import { useLocation, Link } from "react-router-dom";

export function Login() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>Login Here</h1>
      {location.state && <p>this To do is comleted, you can Sign in</p>}
      {!location.state && (
        <p>
          this To do is not finished yet comleted, please{" "}
          <Link to="/register">Register</Link>
        </p>
      )}
    </>
  );
}

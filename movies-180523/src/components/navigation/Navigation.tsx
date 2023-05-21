import { Link, NavLink } from "react-router-dom";
import styles from "./Navigatio.module.css";
import { Todos } from "../../todos/Todos";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/login">Login</Link>

      {/* <Link className={styles.navLinks} to="/">Home</Link> */}
      {/* <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link> */}

      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink> */}
    </nav>
  );
}

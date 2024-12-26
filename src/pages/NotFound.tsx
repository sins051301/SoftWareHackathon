import { Link } from "react-router-dom";
import COFFEEICON from "@/assets/coffee.svg?react";

export function NotFound() {
  return (
    <>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <COFFEEICON />
      <Link to="/">Go to Home</Link>
    </>
  );
}

export default NotFound;

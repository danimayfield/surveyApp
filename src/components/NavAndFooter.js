import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <Link to="/">
        <p>Logo Here</p>
      </Link>
      <ul>
        <Link to="create">
          <li>Create a Survey</li>
        </Link>
        <Link to="take">
          <li>Take a Survey</li>
        </Link>
        <li>Login</li>
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <div>
      <h4>MySurvey</h4>
      <p>Designed & Developed by: Dani Mayfield</p>
      <i>Github</i>
      <i>LinkedIn</i>
      <i>Twitter</i>
    </div>
  );
};

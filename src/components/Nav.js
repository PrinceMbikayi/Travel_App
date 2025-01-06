import { useContext } from "react";
import NavContext from "../context/NavContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { state, dispatch } = useContext(NavContext);

  return (
    <>
      {state ? <div className="navLayer"></div> : ""}

      <div className={state ? 'nav nav--open' : 'nav nav--close'}>
        <div className="nav__content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;

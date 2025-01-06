import { useContext, useState } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";

const Login = (props) => {
  const { dispatch } = useContext(ModelContext);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(userLogin);
  }

  return (
    <form onSubmit={onSubmitLogin}>
      <div className="model__heading">
        <h3>Login</h3>
      </div>
      <div className="group">
        <input
          type="email"
          name=""
          className="group__control"
          placeholder="Enter email"
          onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
          value={userLogin.email}
        />
      </div>
      <div className="group">
        <input
          type="password"
          name=""
          className="group__control"
          placeholder="Enter password"
          onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
          value={userLogin.password}
        />
      </div>
      <div className="group flex space-between y-center">
        <input type="submit" name="" className="btn-dark" value="Login" />
        <span
          onClick={() =>
            dispatch({ type: OPEN_MODEL, payload: props.currentModel })
          }
        >
          Create new account?{" "}
        </span>
      </div>
    </form>
  );
};

export default Login;

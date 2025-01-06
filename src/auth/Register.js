import { useContext, useState } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";

const Register = (props) => {
  const { dispatch } = useContext(ModelContext);
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onSubmitRegister = (e) => {
    e.preventDefault();
    console.log(userRegister);
  }

  return (
    <form onSubmit={onSubmitRegister}>
      <div className="model__heading">
        <h3>Create new account</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="Enter name"
          onChange={(e) => setUserRegister({ ...userRegister, name: e.target.value })}
          value={userRegister.name}
        />
      </div>
      <div className="group">
        <input
          type="email"
          name=""
          className="group__control"
          placeholder="Enter email"
          onChange={(e) => setUserRegister({ ...userRegister, email: e.target.value })}
          value={userRegister.email}
        />
      </div>
      <div className="group">
        <input
          type="password"
          name=""
          className="group__control"
          placeholder="Create password"
          onChange={(e) => setUserRegister({ ...userRegister, password: e.target.value })}
          value={userRegister.password}
        />
      </div>
      <div className="group flex space-between y-center">
        <input type="submit" name="" className="btn-dark" value="Register" />
        <span
          onClick={() =>
            dispatch({ type: OPEN_MODEL, payload: props.currentModel })
          }
        >
          Already have an account?{" "}
        </span>
      </div>
    </form>
  );
};

export default Register;

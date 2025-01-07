import { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Header from "../components/Header";
import Model from "../components/Model";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Destination from "../components/Destination";

const Home = () => {
  const { dispatch } = useContext(ModelContext);

  const [state] = useState({
    heading: "We are travel friends",
    paragraph:
      "Come and join us we travel the most famous and beautiful places in the world",
  });

  const [registerModel] = useState("registerModel");
  const [loginModel] = useState("loginModel");

  return (
    <>
      <Helmet>
        <title>Travel Friends</title>
        <meta
          name="description"
          content="Travel to the world with travel friends"
        />
        <meta name="keywords" content="travel, travel tours, airline" />
      </Helmet>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          className="btn-default"
          onClick={() => dispatch({ type: OPEN_MODEL, payload: registerModel })}
        >
          Get started
        </button>
      </Header>

      <Model current={registerModel}>
        <Register currentModel={loginModel} />
      </Model>

      <Model current={loginModel}>
        <Login currentModel={registerModel} />
      </Model>
      <Destination />
    </>
  );
};

export default Home;

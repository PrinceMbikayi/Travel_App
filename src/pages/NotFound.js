import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="travel friends Not Found Page" />
      </Helmet>
      <h1>Not Found Page</h1>
    </>
  );
};

export default NotFound;

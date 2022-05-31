import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Styles } from "./NotFoundStyle";

const NotFound = () => {
  const history = useHistory();

  return (
    <Styles className="text-center">
      <img src="/assets/404notfound.svg" alt="" />
      <p>
        Page not found. <span onClick={() => history.goBack()}>Go Back</span>
      </p>
    </Styles>
  );
};

export default NotFound;

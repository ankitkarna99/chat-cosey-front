import React from "react";

const IndexPage = (props) => {
  React.useEffect(() => {
    const token = localStorage.getItem("CC_Token");
    console.log(token);
    if (!token) {
      props.history.push("/login");
    } else {
      props.history.push("/dashboard");
    }
    // eslint-disable-next-line
  }, [0]);
  return <div></div>;
};

export default IndexPage;

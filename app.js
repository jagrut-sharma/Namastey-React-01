import React from "react";
import ReactDOM from "react-dom/client";

// JSX Element:
const Title = () => <h1 id="heading">Namastey React using JSX 🚀</h1>;

const sampleHeading = <h2>Sample Heading</h2>;

const number = 100;

// Functional Component:
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">Namaste React Functional Component</h1>
      {sampleHeading}
      <h3>{number + 100}</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

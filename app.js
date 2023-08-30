import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namastey React 🚀"
);
console.log(heading); // {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}

// JSX: HTML-like or XML-like syntax
const jsxHeading = <h1 id="heading">Namastey React using JSX 🚀</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

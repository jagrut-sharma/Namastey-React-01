import React from "react";
import ReactDOM from "react-dom/client";
/* 

<div id='parent'>
  <div id='child'>
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>  
  <div id='child2'>
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div> 
</div>

*/

const heading1 = React.createElement("h1", {}, "I'm h1 tag");

const heading2 = React.createElement("h2", {}, "I'm h2 tag");

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [heading1, heading2]),
    React.createElement("div", { id: "child2" }, [heading1, heading2]),
  ] // For siblings use array.
);

console.log(parent); // React.createElement simply return an object which is converted to HTML tag through render

//! It is very difficult to create elements using createElement and therefore JSX was introduced

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

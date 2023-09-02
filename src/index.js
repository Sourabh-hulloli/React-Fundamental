import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h1>My First Component</h1>;
}

// function Greeting() {
//   return React.createElement("h2", {}, "hello world");
// }

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", null, "hello world"),
//     React.createElement("p", {}, "About the world"),
//     React.createElement("p", {}, "Hi there")
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

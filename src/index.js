import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return <h1>My First Component</h1>;
// }

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

//? Nested components
// =================================================
// const Greeting = () => {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// };

// const Person = () => <h2>John doe</h2>;

// const Message = () => {
//   return <p>This is my message!</p>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting />);
// ===============================================================

//? Book List Project

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/5109aMue7OL.jpg"
    alt="The Count of Monte Cristo: The Tale of Revenge and Redemption"
  />
);
const Title = () => {
  return (
    <h2>
      The Count of Monte Cristo: The Tale of Revenge and Redemption - Navigating
      the Epic Saga of Revenge and Redemption
    </h2>
  );
};

const Author = () => {
  return <h4> Alexandre Dumas</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

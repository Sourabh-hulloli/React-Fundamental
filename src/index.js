import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
/*
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="./images/book-1.jpg"
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
  //?  Adding inline Style with creating seperate style Object and passing that object to HTML element.
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem,",
  };
  return (
    // <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    //   Alexandre Dumas
    // </h4>
    //? Alternative Approach
    <h4 style={inlineHeadingStyles}>Alexander Dumas</h4>
  );
};

*/

//? ============================================
//? Refactoring Code

const author = "Alexander Dumas";
const title =
  "The Count of Monte Cristo: The Tale of Revenge and Redemption - Navigating the Epic Saga of Revenge and Redemption";
const img = "./images/book-1.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

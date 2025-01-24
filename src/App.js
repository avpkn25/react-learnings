// function App() {
//   return (
//     <h1>Welcome to React</h1>
//   );
// }

// import { useState } from "react";

// export default App;

// functional components

// function App () {
//   return <h1>Hello Praveen</h1>
// }
// export default App

// class based component

// import { Component } from "react";

// class App extends Component {
//   // To show content on the screen
//   render() {
//     return <h1>Hello Praveen</h1>
//   }
// }

// export default App;

// function App () {
//   return <h1>Hello Praveen</h1>
// }
// export default App

// import Add from "./components/Add";
// import Greetings from "./components/Greetings";

// import { Fragment } from "react";

// function App() {
//   return (
//     // <section>
//     //   <Greetings />
//     //   <Add />
//     // </section>

//     // <Fragment>
//     //   <Greetings/>
//     //   <Add/>
//     // </Fragment>

//     <>
//       <Greetings />
//       <Add />
//     </>

//   );
// }

// export default App;

// Expressions

// function App () {
//     const myName = "Praveen"
//     const multiply = (a,b) => a*b
//     const specialClass = "simple-class"
//   return (
//     <>
//         <h1>{ myName }</h1>
//         <p>2 + 2 = { 2 + 2 }</p>
//         <p>3 * 2 = { multiply(3,2) }</p>
//         <p>My Firends List: { ["Alex", "Bob", "Charlie"] }</p>
//         <p className={ specialClass } >This is a special Class</p>
//     </>
//   )
// }

// export default App

// Lists

// function App() {
//   const numbers = [1, 2, 3, 4, 5];
//   const userInfo = [
//     {
//       username: "Praveen",
//       email: "praveen@gmail.com",
//       location: "UK",
//     },
//     {
//       username: "John",
//       email: "john@gmail.com",
//       location: "Arab",
//     },
//     {
//       username: "Alex",
//       email: "alex@gmail.com",
//       location: "USA",
//     },
//   ];
//   return (
//     <>
//       {/* {numbers.map((number) => (
//         <ul key={Math.random() * 10}>
//           <li>{number}</li>
//         </ul>
//       ))} */}

//       {userInfo.map(user => (
//         <ul key = {Math.random()*10} >
//             <li>{user.username}</li>
//             <li>{user.email}</li>
//             <li>{user.location}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

// export default App;

// PROPS

// import User from "./components/User";

// function App() {
//   return (
//     <>
//       <User
//         img="https://avatars.githubusercontent.com/u/124883764?v=4"
//         name="Praveen"
//         age={20}
//         hobbies={["Coding", "Reading", "Sleeping"]}
//         realdata={{ name: "praveen", location: "INDIA" }}
//       />
//     </>
//   );
// }

// export default App;

// PROPS CHILDREN

// import User from "./components/User";

// function App() {
//   return (
//     <>
//       <User
//         img="https://avatars.githubusercontent.com/u/124883764?v=4"
//         name="Praveen"
//         age={20}
//         hobbies={["Coding", "Reading", "Sleeping"]}
//         realdata={{ name: "praveen", location: "INDIA" }}
//       >
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

//       </User>
//     </>
//   );
// }

// export default App;

// CONDITIONAL OPERATORS

// 1. IF

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InValidPassword = () => <h1>InValid Password</h1>;

// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   } else {
//     return <InValidPassword />;
//   }
// };

// function App() {
//   return (
//     <>
//       <Password isValid={false} />
//     </>
//   );
// }

// export default App;

// 2. &&

// const Cart = () => {
//   const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodies"];

//   return (
//     <>
//       <h1>Cart 🛒</h1>

//       {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
//       <ul>
//         <h4>👇 Products</h4>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <Cart />
//     </>
//   );
// }

// export default App;

// 3. TERNARY OPERATOR

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InValidPassword = () => <h1>InValid Password</h1>;

// const Password = ({ isValid }) => {
//   //   if (isValid) {
//   //     return <ValidPassword />;
//   //   } else {
//   //     return <InValidPassword />;
//   //   }
//   return isValid ? <ValidPassword /> : <InValidPassword />;
// };

// function App() {
//   return (
//     <>
//       <Password isValid={true} />
//     </>
//   );
// }

// export default App;

// STYLING CSS - 5 Ways

// 1. Inline

// function App () {
//     return <h1 style={{ color:"black", backgroundColor:"#ccc" }} >Hello I'm React</h1>
// }

// export default App

// 2. Internal

// function App() {
//   const s = {
//     color: "white",
//     backgroundColor: "teal",
//     padding: "10px",
//   };
//   return (
//     <h1
//       style={{
//         color: s.color,
//         backgroundColor: s.backgroundColor,
//         padding: s.padding,
//       }}
//     >
//       Hello I'm React
//     </h1>
//   );
// }

// export default App;

// 3. External

// import './index.css'

// function App () {
//     return (
//         <>
//             <h1>Hello I'm React</h1>
//         </>
//     )
// }

// export default App

// 4. Bootstrap
// imported bootstrap in index.js

// import Button from 'react-bootstrap/Button';

// function OutlineTypesExample() {
//   return (
//     <>
//       <Button variant="outline-primary">Primary</Button>
//       <Button variant="outline-secondary">Secondary</Button>
//       <Button variant="outline-success">Success</Button>
//       <Button variant="outline-warning">Warning</Button>
//       <Button variant="outline-danger">Danger</Button>
//       <Button variant="outline-info">Info</Button>
//       <Button variant="outline-light">Light</Button>
//       <Button variant="outline-dark">Dark</Button>
//     </>
//   );
// }

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// function App() {
//     // return <OutlineTypesExample />
//   return <BasicExample />;
// }

// export default App;

// 5. Tailwind CSS

// not working in old reactjs framework

// REACT ICONS

// import { BsCartCheckFill } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";

// function App () {
//     return (
//         <>
//             <BsCartCheckFill />
//             <FaGithub />
//         </>
//     )
// }

// export default App

// EVENTS

// const Button = () => {
//   const handleClick = (a, b) => {
//     alert(a + b);
//   };

//   return <button onClick={() => handleClick(2, 2)}>Click</button>;
// };

// const Copy = () => {
//   const copyHandler = () => {
//     alert("Stop Stealing my Content!!!!");
//   };
//   return (
//     <>
//       <p onCopy={copyHandler}>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
//         cupiditate dolores inventore deleniti debitis et quo asperiores saepe,
//         nam sequi?
//       </p>
//     </>
//   );
// };

// const Move = () => {
//   const moveHandler = () => {
//     alert("You Hovered Me");
//     // console.log("You Hovered Me");
//   };
//   return (
//     <>
//       <p onMouseMove={moveHandler}>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
//         cupiditate dolores inventore deleniti debitis et quo asperiores saepe,
//         nam sequi?
//       </p>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       {/* <Button /> */}
//       {/* <Copy /> */}
//       <Move />
//     </>
//   );
// }

// export default App;

// STATE

// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// }

// export default App;

// to change string data in the state

// import { useState } from "react";

// const Name = () => {
//   const [username, setUsername] = useState("Unknown");
//   const changeName = () => {
//     setUsername("Praveen");
//   };
//   return (
//     <>
//       <h1>{username}</h1>
//       <button onClick={changeName}>Change Name</button>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <Name />
//     </>
//   );
// }

// export default App;

// to change array data in the state

// import { useState } from "react";

// function App() {
//   const [friends, setFriends] = useState(["Alex", "Bob"]);

//   const addOne = () => {
//     setFriends([...friends, "Praveen"]);
//   };

//   const deleteOne = () => {
//     setFriends(friends.filter((f) => f !== "Praveen"));
//   };

//   const updateOne = () => {
//     setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));
//   };

//   return (
//     <>
//       {friends.map((friend) => (
//         <li key={Math.random()}>{friend}</li>
//       ))}

//       <button onClick={addOne}>Add One</button>
//       <button onClick={deleteOne}>Remove One</button>
//       <button onClick={updateOne}>Update One</button>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [movie, setMovie] = useState({
//     title: "Salaar",
//     ratings: 9,
//   });

//   const handleChange = () => {
//     // const copyMovie = {
//     //   ...movie,
//     //   ratings: 9.5,
//     // };
//     // setMovie(copyMovie);
//     setMovie({ ...movie, ratings: 9.5 });
//   };

//   return (
//     <>
//       <h1>{movie.title}</h1>
//       <p>{movie.ratings}</p>
//       <button onClick={handleChange}>Change Rating</button>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [movies, setMovies] = useState([
//     { id: 1, title: "Spiderman", ratings: 3 },
//     { id: 2, title: "Superman", ratings: 6 },
//   ]);

//   const handleClick = () => {
//     setMovies(
//       movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick 4" } : m))
//     );
//   };

//   return (
//     <>
//       {movies.map((movie) => (
//         <li key={Math.random()}>{movie.title}</li>
//       ))}
//       <button onClick={handleClick}>Change Name</button>
//     </>
//   );
// }

// export default App;

// FORMS

// import { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");

//   const handleChange = (e) => {
//     setUsername(e.target.value);
//     // console.log(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`You Typed: ${username}`);
//     setUsername("");
//     // console.log(username);
//   };

//   return (
//     <>
//       <h1>Form Demo</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={handleChange} />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;

// useEffect() hook

// import { useEffect, useState } from "react";

// function App() {
//   const [value, setValue] = useState(0);

//   // const handleClick = () => {
//   //   setValue(value + 1)
//   // }
//   // return (
//   //   <>
//   //     <h1>{value}</h1>
//   //     <button onClick={handleClick} >Click Me</button>
//   //   </>
//   // )

//   // 1. Render for the (first time)
//   // 2. Anytime we do (side effect)
//   // if we want to call a useEffect conditionally then we have to wrap the condition inside the useEffect()
//   // 3. Dependancy List/array
//   useEffect(() => {
//     console.log("Hello");
//     document.title = `Increment (${value})`;
//   }, []); // if we use the empty array dependancy then this useEffect() will run only once. but if we give any other value inside the array then this useEffect() hook will run whenever the passed dependancy changes.
//   return (
//     <>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value + 1)}>Click Me</button>
//     </>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       if (data && data.length) setData(data);
//     }

//     getData();
//   }, []);

//   return (
//     <>
//       <ul>
//         {data.map((item) => (
//           <li key={Math.random()}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// prop drilling

// import A from "./components/A";

// function App() {
//   const name = "Praveen";
//   return (
//     <>
//       <A name={name} />
//     </>
//   );
// }

// export default App;

// COntext API

// 1. Import (createContext)
import { createContext } from "react";
import C from "./components/C"

// 2. Creating instance of (createContext)
export const Data = createContext();

function App() {
  const name = "Praveen"
  return (
  <>
    <Data.Provider value={name} >
      <C/>
    </Data.Provider>
  </>
  );
}

export default App;

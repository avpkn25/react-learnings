// function App() {
//   return (
//     <h1>Welcome to React</h1>
//   );
// }

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

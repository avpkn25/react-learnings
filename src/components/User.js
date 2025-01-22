// const User = (props) => {
//   return (
//     <section>
//       <img src={props.img} alt={props.name} />
//       <h1>{props.name}</h1>
//       <h3>Hobbies: {props.hobbies}</h3>
//       <p>{props.realdata.name}</p>
//       <p>{props.realdata.location}</p>
//     </section>
//   );
// };

// export default User;

// DESTRUCTURING

// const User = ({img, name, hobbies}) => {
//   return (
//     <section>
//       <img src={img} alt={name} />
//       <h1>{name}</h1>
//       <h3>Hobbies: {hobbies}</h3>
//     </section> 
//   );
// };

// export default User;


// CHILDREN

const User = ({img, name, hobbies, children}) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <h3>Hobbies: {hobbies}</h3>
      {children}
    </section> 
  );
};

export default User;
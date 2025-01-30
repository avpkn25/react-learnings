// import { Data, Data1 } from "../App";

// const C = () => {
//   return (
//     <>
//       <Data.Consumer>
//         {(name) => {
//           // return <h1>My name is: {name}</h1>
//           return (
//             <Data1.Consumer>
//               {(age) => {
//                 return (
//                   <h1>
//                     My name is :{name} & I'm {age} years old.
//                   </h1>
//                 );
//               }}
//             </Data1.Consumer>
//           );
//         }}
//       </Data.Consumer>
//     </>
//   );
// };

// export default C;

import { useContext } from "react";
import { Data, Data1 } from "../App";

const C = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <>
      <h2>
        My name is :{name} & I'm {age} years old.
      </h2>
    </>
  );
};

export default C;

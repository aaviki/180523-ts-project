// import { useState } from "react";

// export function Timer() {
//   const [timer, setTimer] = useState(0);
//   const [randomNumber, setRandomNumber] = useState(0);

//   setTimeout(() => {
//     setTimer((timer) => timer + 1);
//     setRandomNumber(Math.random());
//   }, 1000);

//   if (timer > 20) {
//     return <div>More than 20</div>;
//   } else {
//     return (
//       <div>
//         <div>les than 20</div>;<h1>Timer: {timer}</h1>
//         <h1>Timer: {timer >= 10 ? "More than 10" : "Les than ten"}</h1>
//         <h2>
//           Timer2: {timer > 15 && <div>Timer's value is more than 15</div>}
//         </h2>
//         <p>Random number: {randomNumber}</p>
//       </div>
//     );
//   }
// }
import { useState } from "react";

export function Timer() {
  const [timer, setTimer] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  setTimeout(() => {
    setTimer(timer + 1);
    setRandomNumber(Math.random());
  }, 1000);

  if (timer > 10) {
    return <div>MORE THAN 10</div>;
  } else {
    // return <h2>in Else</h2>
  }

  return (
    <div>
      {timer}
      <h1>Timer: {timer >= 10 ? "More or equal to 10" : "Less than 10"}</h1>
      <h2>Timer2: {timer > 10 && <div>Timer's value is more than 10</div>}</h2>
      {/* <p>Random number: {randomNumber}</p> */}
    </div>
  );
}

/*
import Heading from "./Heading";
function App() {
    return (
        <div className="App">
            <Heading firstName="Any other name then Bob" />
            <Heading firstName="Jack" />
        </div>
    );
};
export default App;
*/

// Experssions as props 
/*
const bool = false;
const str1 = "just";
function Example(props) {
    return (
        <div>
        <h2>The Value of toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
        <p>The Value of math props is: <em>{props.math}</em></p>
        <p>The Value of str props is: <em>{props.str}</em></p>
        </div>
    );
}; 
export default function App () {
    return (
        <div className="App">
            <Example toggleBoolean={!bool}
            math={(10+20)/3}
            str={`str1 + ' another ' + 'string'`} 
            />
        </div>
    );
};
*/

// Embedding in attributes 
// import avatar from './avatar.png'
// function Logo(props) {
//     const userPic = <img src={avatar} />;
//     return userPic;
// };
// function App() {
//     return (
//         <div className="App">
//             <h1>Hello World!</h1>
//             <Logo />
//         </div>
//     );
// }
// export default App;

//
/*
import "./App.css"
import Card from "./Card";
function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First Card's h2" h3="First Card's h3" />
      <Card h2="Second Card's h2" h3="Second Card's h3" />
      <Card h2="Third Card's h2" h3="Third Card's h3" />
    </div>
  );
}
export default App;
*/
// Eventfull Issues
/*
function NumBillboard(props) {
    return (
        <>
        <h1>{prop.num}</h1>
        </>
    )
}
export default NumBillboard;
*/
// Common event handling
// import Btn from "./Btn";
// import "./App.css";
// function App() {
//     return (
//         <Btn />
//     );
// };
// export default App;


// User Events 
/*
import ModeToggler from "./ModeToggler";
 function App() {
    
     return (
         <ModeToggler />
     );
 };
  export default App;
  */
  

  // Dynamic Events
  /*
  function App() {
    function handleClick() {
      let randomNum = Math.floor(Math.random() * 3) + 1;
      console.log(randomNum);
      let userInput = prompt('Type a number');
      alert(`Computer Number: ${randomNum}, Your Guess: ${userInput}`);
    }
    return (
      <div>
        <h1>Task: Add a button and handle a click event</h1>
        <button onClick={handleClick}>Guess the number between 1 and 3.</button>
  
      </div>
    );
  }
  
  export default App;
  */

  // Parent-Child data flow
  /*
  import PromoHeading from "./PromoHeading"
  const  data = {
    heading: "99% of all items!",
    callToAction: "Everthing must go!"
   }
 function Promo() {
  return (
    <div>
      <PromoHeading
       heading={data.heading}
      callToAction={data.callToAction}
      />
    </div>
  )

 }
 export default Promo;
 */


 //Children and Data
/*
 import Child from "./Child";
 import "./App.css"
 function App() {
  const date = new Date();
  return (
    <div>
      <Child message={date.toLocaleTimeString()}/>
    </div>
  )
 }
 export default App;
 */

 // Using hooks 
 // Example 1
 /*
import { useState } from "react";
export default function InputComponent() {
  const [inputText, setText] = useState('hello');
  function handleChange(e) {
    setText(e.target.value);

  }
  return (
    <>
    <input value={inputText} onChange={handleChange} />
    <p>You typed: {inputText} </p>
    <button onClick={() => setText('hello')}>reset</button>
    </>
  )
}
*/
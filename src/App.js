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

import { useRef } from "react";
import Workdays from "./Workdays";
import Weekends from "./Weekends";

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
// Example 2
/*
import { useState } from "react";
export default function RegisterForm() {
  const [form, setForm] = useState({
  firstName: 'Luke',
  lastName: 'Jones',
  email: 'lukejones@sculputure.com'
  });
  return (
    <>
    <label>
      First Name:
      <input value={form.firstName} onChange={e =>{
        setForm({
          ...form,
          firstName: e.target.value
        });
      }}
      />
    </label>
    <label>
    Last name:
    <input value={form.lastName}  onChange={e => {
      setForm({
        ...form,
        lastName: e.target.value
      });
    }}
    />
    </label>
    <label>
      Email:
      <input value={form.email} onChange={e => {
        setForm({
          ...form,
          email: e.target.value
        });
      }}
      />
    </label>
    <p>
      {form.firstName} {''}
      {form.lastName}{''}
      {form.email}
    </p>
    </>
  );
}
*/
// The use Refhook
/*
function TextInputWithfocusBotton() {
 const inputEl = useRef(null);
 const onButtonClick = () => {
 inputEl.current.focus();
 }
 return (
  <>
  <input ref={inputEl} type="text" />
  <button onClick={onButtonClick}>Focus the input</button>
  </>
 );
}
 export default TextInputWithfocusBotton;
 */
// Observing State 
/*
import React, {useState} from "react";
import Heading from './Heading'
function App() {
  const [Word, setWord] = React.useState('eat');
  function handleClick() {
    setWord('Drink');
  }
  return (
    <div className="App">
      <Heading message={Word + " at little lemon"}></Heading>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}
export default App;
*/
// prop drilling
/*
function Main(props) {
  return (
    <Header msg={props.msg} />
  );
};
function Header(props) {
  return (
    <div style={{border: "10px solid whitesmoke"}}>
      <h1>Header here</h1>
      <Wrapper msg={props.msg} /> 
    </div>
  );
};
function Wrapper(props) {
 return (
  <div style={{border: "10px solid lightgray"}}>
    <h2>Wrapper here</h2>
    <Button msg={props.msg} />
  </div>
 )
}
function Button(props) {
  return (
    <div style={{ border: "20px solid Orange"}}>
      <h3>This is Button Component</h3>
      <button onClick={() => alert(props.msg)}>Click me!</button>
    </div>
  );
};
function App() {
  return (
    <Main msg="I passed through the Header and Wraaper and I reached the button component"
      />
  );
  };
  export default App;
  */
 // React State Management 
 /*
 import MealsProvider from "./MealsProvider";
 import MealsList from "./MealsList";
 import Counter from "./Counter";
 
 function App() {
  return (
    <div>
    <MealsProvider>
      <MealsList />
      <Counter />
    </MealsProvider>
    </div>
  );
 }
 export default App;
 */
/*
 import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
function App() {
  const[fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3}
]);
  return (
    <div className="App">
      <h1>Where should the State go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
};
export default App;
*/
// NAvbars 
/*
import Homepage from "./HomePage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav className="Nav">
      <Link to="/" className="nav-item">HomePage</Link>
      <Link to="/about-me" className="nav-item">About Me</Link>
      <Link to="/contact-me" className="nav-item">Contact</Link>
      
      </nav>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
*/
/*
import Workdays from "./Workdays";
import Weekends from "./Weekends";
function CurrentMessage() {
      const day = new Date().getDay();
      if (day >= 1 && day <= 5) {
          return <Workdays />
      }
      return <Weekends />
  }
export default CurrentMessage;
*/
function CurrentMessage(props) {
      if (props.day >= 1 && props.day <= 5) {
          return <Workdays />
      }
      return <Weekends />
  }
  export default CurrentMessage;
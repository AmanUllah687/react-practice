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
/*
import avatar from './avatar.png'
function Logo(props) {
    const userPic = <image src={avatar} />;
    return userPic;
};
function App() {
    return (
        <div className="App">
            <h1>Hello World!</h1>
            <Logo />
        </div>
    );
}
export default App;
*/
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
import Btn from "./Btn";
import "./App.css";
function App() {
    return (
        <Btn />
    );
};
export default App;

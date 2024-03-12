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
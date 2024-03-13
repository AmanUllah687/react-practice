 import { click } from "@testing-library/user-event/dist/click";

function Btn() {
     const clickHandler = () => console.log("Clicked");
 return (
 <button onClick={clickHandler}>
    Click Me!
 </button>
 )
}
 export default Btn;
/*
import { click } from "@testing-library/user-event/dist/click";
function Btn() {
    const clickHandler = () => console.log("mouse over");
return (
<button onMouseOver={clickHandler}>
    Click Me!
</button>
)
}
export default Btn;
*/
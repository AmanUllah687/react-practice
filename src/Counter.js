import { useMealsListContext } from "./MealsProvider";
const Counter = () => {
    const {meals} = useMealsListContext();
    return (
        <div>
            <h3>Numbers of meals today: {meals.length}</h3>
        </div>
    );
}
export default Counter;
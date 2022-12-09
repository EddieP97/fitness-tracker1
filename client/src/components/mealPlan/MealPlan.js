import React, {useState} from 'react';
import MealList from './MealList';
import './index.css';

const MealPlan = () => {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function handleChange(e) {
        setCalories(e.target.value)
    }
    function getMealData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=f37db4a4818542d39d9289aec42da010&timeFrame=day&targetCalories=${calories}`
        )
        .then((response) => response.json())
        .then((data)=> {
            setMealData(data);
            console.log(data);
        })
        .catch(() => {
            console.log("error");
        })
    }

    return <div className="MealPlan">
        <section className="controls">
            <input 
            type="number"
            placeholder="Calories (e.g. 2000)" 
            onChange={handleChange}/>
        </section>
        <button onClick={getMealData}>Get Daily Meal Plan</button>
        {mealData && <MealList mealData={mealData} />}
    </div>

};

export default MealPlan;
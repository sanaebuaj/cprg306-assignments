import React, { useState, useEffect } from 'react';


async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log("data",data)
        return data.meals || []; 
    } catch (error) {
        console.error('Error fetching meal ideas:', error);
        return [];
    }
}

const MealIdeas = ({ ingredient, onSelectItem }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadMeals = async () => {
            if (ingredient) {
                setLoading(true);
                const newMeals = await fetchMealIdeas(ingredient);
                setMeals(newMeals);
                setLoading(false);
            }
        };

        loadMeals();
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-xl font-bold text-white mb-2">Meal Ideas</h1>
            {ingredient ? (
               loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {meals.length > 0 ? (
                        <ul className="max-w-md  pt-0 pl-0 text-white">
                            Here are some meal ideas using {ingredient}:
                            {meals.map((meal) => (
                                <li
                                    key={meal.idMeal}
                                    className="bg-slate-900 hover:bg-orange-600 cursor-pointer m-2 p-2"
                                >
                                {meal.strMeal}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No meal ideas found for {ingredient}</p>
                    )}
                </>
            )
            ):(
                <p>Select an item to see meal ideas</p>
            )}
        </div>
    );
};

export default MealIdeas;
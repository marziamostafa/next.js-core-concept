import MealSearchInput from "./components/MealSearchInput"



export default async function MealsPage({ searchParams }) {
    const query = await searchParams

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json()
            //setMeals(data?.meals || [])
            return data.meals

        }
        catch (error) {
            console.log(error)
            return []
        }
    }

    const meals = await fetchMeals()
    return (
        <div >
            <MealSearchInput />
            <div className='grid grid-cols-3 gap-4'>
                {
                    meals?.map((meal) => {
                        return (
                            <div key={meal.idMeal} className='border-2 border-slate-600 p-4 mb-2'>
                                <h1 className='text-2xl font-bold'>{meal.strMeal}</h1>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <p>{meal.strInstructions}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

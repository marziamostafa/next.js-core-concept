const fetchSingleMeals = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    //setMeals(data?.meals || [])
    return data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// --------dynamic title function----------
export async function generateMetadata({ params }) {
  // read route params
  const { id } = (await params).id;
  console.log(params);

  // fetch data
  const [singleMeal] = await fetchSingleMeals(params.id);
  console.log(singleMeal);
  return {
    title: singleMeal.strMeal,
    description: singleMeal.strInstructions,
  };
}

export default async function singleMealPage({ params }) {
  const p = await params;
  console.log(p.id);

  const meals = await fetchSingleMeals(p?.id);
  console.log(meals);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {meals?.map((meal) => {
          return (
            <div
              key={meal.idMeal}
              className="border-2 border-slate-600 p-4 mb-2"
            >
              <h1 className="text-2xl font-bold">{meal.strMeal}</h1>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strInstructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

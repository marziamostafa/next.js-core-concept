import { Roboto } from "next/font/google";

import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput"
import Image from "next/image";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["greek"]
})


export const metadata = {
    title: "All Meals ",
    description: "Loading MealDB data to learn dynamic data fetching with client component",
};

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
                            <div key={meal.idMeal} className={`${roboto.className}  border-2 border-slate-600 p-4 mb-2`}>
                                <h1 className='text-2xl font-bold'>{meal.strMeal}</h1>
                                <Image src={meal.strMealThumb} width={600} height={600} alt={meal.strMeal} />
                                <p>{meal.strInstructions}</p>
                                <Link rel="stylesheet" href={`meals/${meal.idMeal}`}>
                                    details
                                </Link>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

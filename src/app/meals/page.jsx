"use client";
import React, { use, useEffect, useState } from 'react'

export default function MealsPage() {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json()
            setMeals(data?.meals || [])
            return data.meals

        }
        catch (error) {
            console.log(error)
            return []
        }
    }

    useEffect(() => {
        fetchMeals()
    }, [search])
    return (
        <div >
            <div className='flex justify-center'>
                <input className='border-2 mb-2' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    meals.map((meal) => {
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

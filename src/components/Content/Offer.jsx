import React from 'react';
import {useState,useEffect} from 'react'

const Offer = () => {
    const [fishes,getFishes] = useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then(res => res.json())
        .then(discFish => getFishes(discFish.meals[0]))
    },[])

    const {strMeal,strCategory,strArea,strInstructions,strMealThumb} = fishes
    return (
        <div className="my-40  bg-sky-200/25 px-20 py-5 rounded shadow">
            <h1 className="text-6xl font-bold text-sky-500 text-center py-5 animate-bounce">
                grab this big offer!!
                20% OFF
            </h1>

            <section className="my-10">
                <div className="grid grid-cols-2 gap-20 justify-items-center items-center">
                <div>
                    <h1 className="text-4xl font-medium">foodie name : { strMeal}</h1>
                    <p className="text-2xl font-thin py-2">foodie Category : {strCategory}</p>
                    <p className="leading-relaxed"><span className="text-xl font-thin">foodie description :</span>  {strInstructions}</p>
                    <button className="px-7 py-3 rounded-lg font-normal text-sky-500 text-lg border-2  border-sky-500 my-5 hover:bg-sky-500 hover:text-white">Grabs Now</button>
                </div>
                <div>
                    <img className="rounded-2xl  " src={strMealThumb} alt="" />
                </div>
                </div>

            </section>
        </div>
    );
}

export default Offer;

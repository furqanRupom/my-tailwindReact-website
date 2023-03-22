import React, { useEffect } from 'react';
import Meal from './Meal';
import { useState } from 'react';
import Form from './Form';
import Offer from './Offer';



const Content = () => {
    const [foodies, getFoodies] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(food => getFoodies(food.categories))
    },[])
    return (
        <>
            <main className="my-20 max-w-7xl mx-auto">
                    <Offer />
                    
                    <h1 className="text-4xl font-bold text-center my-20 text-sky-500">order your best foodie</h1>

                    <div className="grid grid-cols-3 gap-5 justify-between ">

                        {
                            foodies.map(food => <Meal food={food} />)
                        }
                    </div>

                    <Form />

            </main>
        </>
    );
}

export default Content;

import React from 'react';
import classes from './Content.module.css'

const Meal = (props) => {
    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription} = props.food
    return (
        <div className="p-5 rounded-md bg-sky-200/25 shadow">
            <img src={strCategoryThumb} alt="logo" />
            <h1 className="text-2xl font-semibold">foodie Name : {strCategory}</h1>
            <p  className={classes.ForOverText}>
                {strCategoryDescription}
            </p>
            <button className="px-7 py-3 rounded-lg font-normal text-sky-500 text-lg border-2  border-sky-500 my-5 hover:bg-sky-500 hover:text-white">Order Now</button>
        </div>
    );
}

export default Meal;

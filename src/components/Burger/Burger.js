import React from "react";
import './Burger.css';
import BurgerIngradiant from "./BurgerIngrediant/BurgerIngradiant";

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {

            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngradiant key={igKey + i} type={igKey} />;
            })

        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className='Burger'>
<<<<<<< HEAD
            <BurgerIngradiant type='bread-top' />
            <p>Changes in master branch</p>
=======
            <p>This is Updated Branch</p>
            <BurgerIngradiant type='bread-top' />
>>>>>>> 'updatedBranchData'
            {transformedIngredients}
            <BurgerIngradiant type='bread-bottom' />

        </div>
    );

}

export default Burger
import React from "react";
import PropTypes from 'prop-types';
import './BurgerIngradiant.css';

class BurgerIngradiant extends React.Component {

    render(){
        
    let ingrediant = null;

    switch(this.props.type){
        case('bread-bottom'):
           ingrediant = <div className='BreadBottom'></div>;
           break;

        case('bread-top'):
           ingrediant = (
            <div className='BreadTop'>
                <div className='Seeds1'></div>
                <div className='Seeds2'></div>
            </div>
        );
            break;

        case('meat'):
            ingrediant = <div className='Meat'></div>;
            break;

        case('cheese'):
            ingrediant = <div className='Cheese'></div>;
            break;

        case('bacon'):
            ingrediant = <div className='Bacon'></div>;
            break;
            
        case('salad'):
            ingrediant = <div className='Salad'></div>;
            break;
        
        default:
            ingrediant=null;
    }
   
     return ingrediant;
};

}

BurgerIngradiant.propTypes = {

    type : PropTypes.string.isRequired
}

export default BurgerIngradiant
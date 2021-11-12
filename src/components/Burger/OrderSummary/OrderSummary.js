import React from "react";
import Auxi from "../../../hoc/Auxi/Auxi";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component{
  //This component should be functional component not the class components
  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate')
  }
  render(){

    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
      <li key={igKey}>
           <span style={{textTransform:"capitalize"}}>{igKey}</span>:{this.props.ingredients[igKey]}
      </li>);
  });
    return(
      <Auxi>
      <h3>Your Order</h3>
      <p>Your delicious burger with the following ingredients:</p>
      <ul>
             {ingredientSummary}

      </ul>
      <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
      <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>


    </Auxi>

    )
  }

}

export default OrderSummary
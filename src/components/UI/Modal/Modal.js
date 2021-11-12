import React from "react";
import './Modal.css';
import Auxi from "../../../hoc/Auxi/Auxi";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log('[Model] WillUpdate');
    }
    render() {
        return(

            <Auxi>
            <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
            <div className='Modal'
            style = {{
        
         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'      
      }}>
      
           {this.props.children}
      </div> 
          </Auxi> 


        )
    }
} 

export default Modal;
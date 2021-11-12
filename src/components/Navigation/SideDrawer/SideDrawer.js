import React from "react";
import Auxi from "../../../hoc/Auxi/Auxi";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import style from './SideDrawer.module.css';

const SideDrawer = (props) =>{
    
    let attachedClass = [style.SideDrawer, style.Close];
    if(props.open) {
        attachedClass= [style.SideDrawer, style.Open];
    }

    return(

        <Auxi>

        <Backdrop show={props.open}  clicked={props.closed}/>

        <div className={attachedClass.join(' ')}>
        <div className={style.Logo}>
        <Logo/>
        </div>
        <nav>
            <NavigationItems />
        </nav>

        </div>
        </Auxi>

    )
}

export default SideDrawer;
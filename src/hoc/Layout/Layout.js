import React from "react";
import Auxi from "../Auxi/Auxi";
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             showSideDrawer:false
        }
    }
    

    sideDrawerClosedHandler= () =>{
        this.setState({
            showSideDrawer:false
        })

    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState)=>{
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }
    
    render() {

        return(
            <Auxi>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                  
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className='Content'>
                  {this.props.children}</main>
            </Auxi>

        )
    }

} 


export default Layout
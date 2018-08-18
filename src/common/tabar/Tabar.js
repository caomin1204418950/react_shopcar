import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './tabar.css'

class Tabar extends Component {
    constructor(props){
        super(props);
        // console.log(this.props)
    }
    render(){
        return(
                <div className="tabarContainer">
                    <div className="tabar">
                        <NavLink to="/"className="tabar_item">
                            <div>首页</div>
                        </NavLink> 
                        <NavLink to="/weitao"className="tabar_item">
                            <div>微淘</div>
                        </NavLink> 
                        <NavLink to="/xiaoxi"className="tabar_item">
                            <div>消息</div>
                        </NavLink> 
                        <NavLink to="/shopcar"className="tabar_item">
                            <div>购物车</div>
                        </NavLink> 
                        <NavLink to="/mytaos"className="tabar_item">
                            <div>我的淘宝</div>
                        </NavLink> 
                    </div>
                </div>
        )
        
    }
}

export default Tabar;
import React, { Component } from 'react';
import {HashRouter as Router , Route, NavLink} from 'react-router-dom';
import Home from '../home/Home'
import Wetao from '../wetao/Wetao'
import Xiaoxi from '../xiaoxi/Xiaoxi'
import Shopcar from '../shopcar/Shopcar'
import Mytaos from '../mytaos/Mytaos'
import Shoppings from '../shoppings/Shoppings'
import './tabar.css'

class Tabar extends Component {
    // constructor(props){
    //     super(props);
    //     console.log(this)
    // }
    render(){
        return(
            <Router>
                <div className="container">
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
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/weitao" component={Wetao}/>
                        <Route path="/xiaoxi" component={Xiaoxi}/>
                        <Route path="/shopcar" component={Shopcar}/>
                        <Route path="/mytaos" component={Mytaos}/> 
                        <Route path="/shoppings/:id" component={Shoppings}/>
                    </div>
                </div>
            </Router>
            
        )
        
    }
}

export default Tabar;
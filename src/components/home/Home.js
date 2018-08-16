import React, { Component } from 'react'
import {getHomedata} from '../../api/api'
import {NavLink} from 'react-router-dom'
import './home.css'

class Home extends Component{
    state={
        data:['数据没到']
    }
    componentDidMount(){
       getHomedata().then(res => {
            this.setState({
                data:res
            })
        })
    }
     render(){
        const dataList = this.state.data
       return(
                <div className="container">
                    {   
                        dataList.map((item,index)=>{
                            return(
                                <NavLink to={'/shoppings/'+item.id} key={index}>
                                    <img src={item.imgUrl} alt=''/>
                                </NavLink>
                            )
                        })
                    }
                </div>
        )
    }
}

export default Home;
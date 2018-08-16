import React, { Component } from 'react';
import {getHomedata} from '../../api/api'
import './home.css'

class Home extends Component{
    state={
        data:[1]
    }
    componentWillMount(){
       getHomedata().then(res => {
            this.setState({
                data:res
            })
           console.log(this.state.data[0].name)
        })
    }
    render(){
        return(
            <div>{this.state.data[0].name}</div>
        )
    }
}

export default Home;
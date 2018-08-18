import React, { Component } from 'react'
import {getHomedata} from '../../api/api'
import PubSub from 'pubsub-js'
import './shoppings.css';

class Shoppings extends Component {
    
    state={
        data:['数据没到']
    }
    componentWillMount(){
        console.log(this.props.match.params.id)
        let id =this.props.match.params.id;
        getHomedata().then(res => {
            this.setState({
                data:res[id]
            })
            console.log(this.state.data.video)
        })
    }
    addShopcars(){
       
       PubSub.publish('PubSubData',this.state.data)
       
    }
  render() {
    return (
      <div className="shopContainer">
          <video controls="controls" className="videos" src={this.state.data.video}></video> 
          <button className="addShopcars" onClick={this.addShopcars.bind(this)}>加入购物车</button>
      </div>
    );
  }
}

export default Shoppings;

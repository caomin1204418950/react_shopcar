import React, { Component } from 'react'
import {getHomedata} from '../../api/api'
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
  render() {
    return (
      <div className="container">
          <video controls="controls"  src={this.state.data.video}></video> 
      </div>
    );
  }
}

export default Shoppings;
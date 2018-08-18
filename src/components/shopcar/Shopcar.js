import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Tabar from '../../common/tabar/Tabar'

import './shopcar.css';

class Shopcar extends Component {

  componentWillMount(){
    
  }
  render() {
    return (
      <div className="shopContainer">
        shopcar

        <Tabar/>
      </div>
    );
  }
}

export default Shopcar;
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './shopcar.css';

class Shopcar extends Component {
  componentWillMount(){
    // PubSub.subscribe('')
    console.log(1)

  }
  render() {
    return (
      <div className="shopContainer">
        shopcar
      </div>
    );
  }
}

export default Shopcar;
import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import PubSub from 'pubsub-js'
import Home from './components/home/Home'
import Wetao from './components/wetao/Wetao'
import Xiaoxi from './components/xiaoxi/Xiaoxi'
import Shopcar from './components/shopcar/Shopcar'
import Mytaos from './components/mytaos/Mytaos'
import Shoppings from './components/shoppings/Shoppings'
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props)
  //   // console.log(this)
  // }
  state = {
    shoppingsChoosed: []
  }
  componentWillMount() {
    var that = this
    PubSub.subscribe('PubSubData', function (topic, message) {
      that.setState({
        shoppingsChoosed: message
      })
      console.log(that.state.shoppingsChoosed.id)
    })
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={Home} />
          <Route path="/weitao" component={Wetao} />
          <Route path="/xiaoxi" component={Xiaoxi} />
          <Route path="/shopcar" component={Shopcar} />
          <Route path="/mytaos" component={Mytaos} />
          <Route path="/shoppings/:id" component={Shoppings} />
        </div>
      </Router>

    );
  }
}

export default App;

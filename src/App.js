import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import SubNav from './SubNav';
import Contact from './Contact';
import Store from './Store';
import Login from './Login';
import {connect} from 'react-redux';

class App extends Component {
  constructor(){
    super();

  }
  render(){
  return (
    <div className="App container">
      <div>
      <Router>
      <div className ="row col-12">
      <Navigation/>
      </div>
      <div className ="row col-12 mt-10">
      <div className ="col-9">
      <Switch> 
      <Route path = '/' exact component= {Home}/>
      <Route path = '/Store' component ={Store}/>
      <Route path = '/Contact' component ={Contact}/>
      <Route path = '/Login' render ={()=> <Login loggedin/>} />
      </Switch></div>
      <div className ="col-3 mt-10">AdSpace Here. <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolor adipisci aperiam esse dolores, sequi in pariatur nobis error harum deleniti praesentium similique necessitatibus officiis magni voluptate possimus, sint quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus voluptatum, dicta voluptas, corporis necessitatibus unde, vitae blanditiis totam quos obcaecati placeat. Tempore quam iusto illo laborum nobis laboriosam libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in nihil, eveniet dolore minima quos voluptatem ut, dolores quasi quidem veniam voluptatum saepe quia sint quae assumenda quisquam. Totam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia eligendi repudiandae nulla rem adipisci quas esse minima doloremque accusantium consequatur vitae earum, quia quo corporis ducimus quasi suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe magni sed ratione, nobis nulla quo eos ipsam beatae a delectus, illum quos vel doloremque debitis animi dolor. Quaerat, ipsa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum officia odio nobis aperiam in facilis impedit vel sequi expedita vitae, fugiat, id quos suscipit aliquam earum nisi natus veritatis adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur error voluptatem rerum mollitia doloremque explicabo, magni, fugiat omnis dolores assumenda quae exercitationem, amet placeat sit? Nisi quidem tenetur placeat accusantium?
</span></div>
      </div>
      </Router>
      </div>
      <div className ="row col-12 bg-light mt-10 mr-10 nopadding" style = {{marginRight: "10px", marginLeft: '10px', padding: '0px'}}> 
        <footer style = {{marginRight: "0px", marginLeft: '0px', padding: '0px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa aut distinctio! Facere quod autem voluptatem. Obcaecati, voluptates laudantium maiores aspernatur commodi accusamus pariatur asperiores impedit libero, ipsum nemo dolores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nulla atque repellat commodi aperiam, nisi nobis quidem dolor dolorem accusantium incidunt veniam voluptatum labore minus necessitatibus. Ullam alias sapiente repellat?
        </footer>
      </div>
    </div>
  );
  }
}
const mapStateToProps = (state) => ({
  login: state.loggedin,
  cart: state.cart,
  username: state.username,
  password: state.password
})
export default connect(mapStateToProps)(App);

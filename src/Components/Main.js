  import React, {Component} from 'react';
  import Photowall from './Photowall.js'
  import AddPhoto from './AddPhoto.js'
  import {Route,Switch} from 'react-router-dom'
  import {Link} from 'react-router-dom'
  import Single from './Single'


  class Main extends Component {


    render() {

       return (
        <div>
          <h1>
            <Link to = "/" >PhotoWall ! </Link>
          </h1>
         <Route exact path='/' render={(params) => (<Photowall {...this.props} {...params} />)} />
          <Route path = "/AddPhoto" render = {({history}) => (
            <AddPhoto {...this.props} />
          )}/>
          <Route path = "/single/:id" render = {(params) => (
            <Single  {...this.props} {...params} />
          )}/>
         </div>
     )
   }
 }


  export default Main;

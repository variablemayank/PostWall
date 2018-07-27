  import React, {Component} from 'react';
  import Title from './Title'
  import Photowall from './Photowall.js'
  import AddPhoto from './AddPhoto.js'
  import Photo from './Photo.js'
  import {Route} from 'react-router-dom'
  import {removePost} from '../redux/action.js'
  import {Link} from 'react-router-dom'

  class Main extends Component {
    constructor () {
       super();
    }


    render() {

       return (
        <div>
          <h1>
            <Link to = "/" >PhotoWall ! </Link>
          </h1>
        <Route  exact path = "/" render = {()=> (
          <div>

            <Photowall {...this.props} />
          </div>
          )} />
          <Route path = "/AddPhoto" render = {({history}) => (
            <AddPhoto {...this.props} />
          )}/>
         </div>
     )
   }
 }


  export default Main;

import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../components/Home.js'
// import About from './About.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "/" component = {Home} title = "Home" initial = {true} />
      </Scene>
   </Router>
)
export default Routes
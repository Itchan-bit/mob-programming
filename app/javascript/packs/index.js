// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserIndex from '../components/user'

const About = () => <h1>About Us</h1>
const App = () => {
  return(
    <>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={UserIndex} />
          <Route path="/about" component={About} />
        </Switch>
      </Router> */}
      <UserIndex />
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

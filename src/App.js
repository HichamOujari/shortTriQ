import React,{Component} from "react"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './css/style.css'
import Acceuil from './components/acceuil'
import Redirect from './components/redirect'
import Show from './components/show'
import Error from './components/error'

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
            <Route path="/home" exact component={Acceuil} />
            <Route exact path="/show/:path" component={Show} />
            <Route exact path="/error" component={Error} />
            <Route exact path="/:path" component={Redirect} />
            <Route exact path="/*/*" component={Error} />
            <Route path="/" component={Acceuil} />
        </Switch>
    </Router>
    )
  }
}

export default App;

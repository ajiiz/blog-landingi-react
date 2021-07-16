import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Article from './components/Article'
import Articles from './components/Articles'
import "./index.css"

const App = () => {
	return (
		<Router>
      <Switch>
        <Route path="/articles" component={Articles} />
				<Route exact path="/articles/:id" component={Article} />
        <Route path="/"><Redirect to="/articles" /></Route>
      </Switch>
    </Router>
	)
}

export default App


import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Navbar from './components/Navbar'
import Article from './components/Article'
import Articles from './components/Articles'
import FavouriteArticles from './components/FavouriteArticles'
import "./index.module.css"

const App = () => {
	return (
		<Router>
			<Navbar />
      <Switch>
        <Route path="/articles" component={Articles} />
				<Route path="/favourite" component={FavouriteArticles} />
				<Route exact path="/articles/:id" component={Article} />
        <Route path="/"><Redirect to="/articles" /></Route>
      </Switch>
    </Router>
	)
}

export default App


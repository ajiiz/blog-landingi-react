import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Navbar from './components/Navbar'
import ArticlePage from './components/ArticlePage'
import ArticlesPage from './components/ArticlesPage'
import FavouriteArticlesPage from './components/FavouriteArticlesPage'
import "./index.module.css"

const App = () => {
	return (
		<Router>
			<Navbar />
      <Switch>
        <Route path="/articles" component={ArticlesPage} />
				<Route path="/favourite" component={FavouriteArticlesPage} />
				<Route exact path="/articles/:id" component={ArticlePage} />
        <Route path="/"><Redirect to="/articles" /></Route>
      </Switch>
    </Router>
	)
}

export default App


import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Main from './MainPage/MainPage'
import store from '../store'
import Page404 from './Page404/Page404'
import { ABOUT, BRIEF, CATALOG, MAIN_PAGE } from './URLs'
import CatalogPage from './CatalogPage/CatalogPage'
import AboutPage from './AboutPage/AboutPage'
import BriefPage from './BriefPage/BriefPage'

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={MAIN_PAGE} component={Main} />
            <Route exact path={CATALOG} component={CatalogPage} />
            <Route exact path={ABOUT} component={AboutPage} />
            <Route exact path={BRIEF} component={BriefPage} />
            <Route path={'*'} component={Page404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App

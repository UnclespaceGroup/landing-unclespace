import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import MainPage from './MainPage/MainPageMobile'
import store from '../store'
import Page404 from './Page404/Page404Mobile'
import { ABOUT, CATALOG, MAIN_PAGE } from './URLs'
import CatalogPage from './CatalogPage/CatalogPageMobile'
import AboutPage from './AboutPage/AboutPageMobile'

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={MAIN_PAGE} component={MainPage} />
            <Route exact path={CATALOG} component={CatalogPage} />
            <Route exact path={ABOUT} component={AboutPage} />
            <Route path={'*'} component={Page404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App

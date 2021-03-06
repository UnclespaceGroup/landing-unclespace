import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import MainPage from './MainPage/MainPageMobile'
import store from '../store'
import Page404 from './Page404/Page404Mobile'
import { ABOUT, BRIEF, CATALOG, MAIN_PAGE } from './URLs'
import CatalogPage from './CatalogPage/CatalogPageMobile'
import AboutPage from './AboutPage/AboutPageMobile'
import BriefPage from './BriefPage/BriefPageMobile'
import Header from '../components/Header/HeaderMobile'
import ScrollToTop from './ScrollToTop'

class App extends React.PureComponent {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <ScrollToTop>
              <Route exact path={MAIN_PAGE} component={MainPage} />
              <Route exact path={CATALOG} component={CatalogPage} />
              <Route exact path={ABOUT} component={AboutPage} />
              <Route exact path={BRIEF} component={BriefPage} />
            </ScrollToTop>
            <Route path={'*'} component={Page404} />

          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App

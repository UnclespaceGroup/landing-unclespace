import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Main from './MainPage/MainPage'
import store from '../store'
import Page404 from './Page404/Page404'

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={Main} />
            <Route path={'*'} component={Page404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App

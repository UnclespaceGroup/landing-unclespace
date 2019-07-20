import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Main from './MainPage/MainPageMobile'
import store from '../store'

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact to={'/'} component={Main} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App

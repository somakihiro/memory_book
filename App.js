import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './src/reducers'
import Root from './src/components/root'

export default class App extends React.Component {
  render() {
    let store = createStore(reducer)

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

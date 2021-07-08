import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App state={store.getState()} store={store} dispatch={store.dispatch.bind(store)} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

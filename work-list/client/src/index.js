import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Header />
      <TodoForm />
      <Todos />
  </Provider>
);

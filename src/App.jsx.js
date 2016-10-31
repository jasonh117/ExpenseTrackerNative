import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import ExpenseList from './components/ExpenseList.jsx';
// import Router from './Router.jsx';

const App = () => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <ExpenseList />
    </Provider>
  );
};

export default App;

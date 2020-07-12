import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux Integration</h1>
      </div>
    </Provider>
  );
};

export default App;

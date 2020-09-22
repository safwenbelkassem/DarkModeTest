
import React from 'react';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import { default as ReduxThunk} from 'redux-thunk'
import reducers from './src/Redux/Reducers/index'
import { AppearanceProvider } from 'react-native-appearance';

import Navigation from './src/Navigation/Navigation'
const App: () => React$Node = () => {
  const store = createStore(reducers,{},applyMiddleware(ReduxThunk))

  return (
    <AppearanceProvider>
      <Provider store={store}>
        <Navigation/>
      </Provider>
    </AppearanceProvider>
  );
 
};



export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';


// Create the redux store with two middleware
const store = createStore(
    	reducer,
  	applyMiddleware(
     	  	thunkMiddleware,
       	createLogger()
    )
);


// Just standard React & Redux stuff here.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

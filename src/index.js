import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import reducer from './reducers'
import thunk from 'redux-thunk'

import EventsIndex from './components/events_index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<EventsIndex />
</Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

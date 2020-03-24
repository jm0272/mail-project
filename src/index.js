/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister(); */



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import reducer from './reducers';
//import modules from './modules';
import configure from './store';

const store = configure();
//const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
//const store = createStore(modules, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import serviceWorker from './serviceWorker';



import { BrowserRouter } from 'react-router-dom';


//import configureStore from './store/configureStore';

//const store = configureStore();

ReactDOM.render((
//<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>

),
document.getElementById('root'));

serviceWorker();



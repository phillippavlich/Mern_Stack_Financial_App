import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Liabilities from './Liabilities';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

/*
<BrowserRouter>

	<div className="sans-serif">
	  <Route path="/" component={App} />
	  <Route path="./Liabilities" component={Liabilities} />
	</div>
</BrowserRouter>
*/
ReactDOM.render(<App />,document.getElementById('root'));

registerServiceWorker();

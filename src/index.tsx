import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './assets/css/style.scss';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorkerRegistration.register();

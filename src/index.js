import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css'

import Login from './user/Login';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();

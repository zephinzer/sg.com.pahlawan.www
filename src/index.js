import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Entrypoint from './global/Entrypoint';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Entrypoint />, document.getElementById('root'));
serviceWorker.unregister();

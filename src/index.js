import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import ScrambleGame from './Components/ScrambleGame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ScrambleGame />, document.getElementById('root'));
// registerServiceWorker();

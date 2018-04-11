import 'core-js/es6/map';/**IE10或以下版本 ECMA Script6*/
import 'core-js/es6/set';/**IE10或以下版本 ECMA Script6*/

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

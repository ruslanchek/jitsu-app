import 'reflect-metadata';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

import './styles/global.pcss';
import './styles/vars.pcss';

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import SimpleBootstrap from '../../react-simple-bootstrap'

import SplashScreen from './pages/SplashScreen';
import bootstrap from './bootstrap/run'
import MainPage from './pages/MainPage';

export default (props) => 
    <SimpleBootstrap 
        renderSplash={SplashScreen} 
        bootstrap={bootstrap}
        renderApp={MainPage}
        {...props} />
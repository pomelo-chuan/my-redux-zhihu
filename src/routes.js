import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Headers from './components/Headers';
import News from './pages/news';

const RouterConfig = () => {
    return (
        <Router>
            <div>
                <Headers />
                <Route exact path="/" component={News} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    )
}

const About = () => {
    return (
        <h2>About</h2>
    )
}

export default RouterConfig;
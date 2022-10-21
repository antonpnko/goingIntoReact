import React from 'react'
import { createRoot } from 'react-dom/client';

import RoutesMain from 'routesMain'
import  NavBar from 'components/navBar'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <RoutesMain />
            </Router>
        </div>
    )
}


const root = createRoot(document.getElementById('root'));
root.render(<App />);


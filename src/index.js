import React from "react";
import { createRoot } from "react-dom/client";

import RoutesMain from "routesMain";
import NavBar from "components/navBar";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "contexts/currentUser";
import CurrentUserChecker from "components/currentUserChecker";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <NavBar />
          <RoutesMain />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

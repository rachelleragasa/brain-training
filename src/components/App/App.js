
import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "../../pages/Home"
import Play from "../../pages/Play"
import GetStarted from "../../pages/GetStarted"
import Results from "../../pages/Results"
import GlobalContextProvider from "../../contexts/globalContext"
import "../../styles/output.css"

const App = () => {

  return (
    <main className="min-h-screen flex flex-col justify-center p-4 lg:max-w-xl lg:m-auto">
      <GlobalContextProvider>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/play" component={Play} />
          <Route path="/get-started" component={GetStarted} />
          <Route path="/results" component={Results} />
        </Switch>
      </GlobalContextProvider>
    </main>
  );
}

export default App;

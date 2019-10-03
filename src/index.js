import React from "react"
import ReactDOM from "react-dom"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"
import AuthProvider from "src/lib/AuthProvider"
import Login from "src/pages/Login"
import ApplicationRoutes from "src/routes"
import { store } from "src/store"

const Root = ({ store }) => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthProvider path="/" component={ApplicationRoutes} />
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  )
}

ReactDOM.render(<Root store={store} />, document.getElementById("root"))

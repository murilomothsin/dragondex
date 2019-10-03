import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import Layout from "app/common/Layout"
import Dragon from "app/pages/Dragon"


const ApplicationRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dragons" />} />
        <Route path="/dragons" component={Dragon} />
      </Switch>
    </Layout>
  )
}

export default ApplicationRoutes

import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Counter from "./pages/Counter";
import MyPage from "./pages/MyPage";
import axios from "axios";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/MyPage">
              <MyPage/>
            </Route>
            <Route exact path="/Counter">
              <Counter/>
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  )
}

export default App;

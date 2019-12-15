import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Standart from './Components/Main/index'

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Standart}/>
    </Switch>
    </BrowserRouter>
  );
}

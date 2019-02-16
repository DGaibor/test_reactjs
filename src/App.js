import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import ListProducts from "./components/ListProducts";

class App extends Component {


    render() {
        return (<BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route path="/" render={(match) => <ListProducts match={match}/>}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;

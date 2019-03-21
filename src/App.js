import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import MainWeather from './components/MainWeather';
import DetailedWeather from './components/DetailedWeather';
import Header from './components/Header';
import './App.scss';

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={MainWeather}/>
                    <Route exact path="/detailed" component={DetailedWeather}/>
                </Switch>
            </>
        );
    }
}

export default App;
